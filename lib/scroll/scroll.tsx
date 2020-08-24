import React, {
    HTMLAttributes,
    MouseEventHandler,
    TouchEventHandler,
    UIEventHandler,
    useEffect,
    useRef,
    useState
} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [barVisible, setBarVisible] = useState(false);
    const setBarTop = (number: number) => {
        if (number < 0) {
            return;
        }
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) {
            return;
        }
        _setBarTop(number);
    };
    const timerIdRef = useRef<number | null>(null);
    const onScroll: UIEventHandler = (e) => {
        setBarVisible(true);
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if (timerIdRef.current !== null) {
            window.clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = window.setTimeout(() => {
            setBarVisible(false);
        }, 300);
    };
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => { //mounted
        const scrollHeight = containerRef.current!.scrollHeight;
        const viewHeight = containerRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);

    }, []);

    const draggingRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);
    const onMouseDownBar: MouseEventHandler = (e) => {
        draggingRef.current = true;
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = firstBarTopRef.current + delta;
            setBarTop(newBarTop);
            const scrollHeight = containerRef.current!.scrollHeight;
            const viewHeight = containerRef.current!.getBoundingClientRect().height;
            containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    };
    const onMouseUpBar = () => {
        draggingRef.current = false;
    };
    const onSelect = (e: Event) => {
        if (draggingRef.current) {
            e.preventDefault();
        }
    };
    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mouseup', onMouseMoveBar);
            document.removeEventListener('mousemove', onMouseMoveBar);
            document.removeEventListener('selectstart', onSelect);
        };
    }, []);
    const [translateY, setTranslateY] = useState(0);
    const lastYRef = useRef(0);
    const onTouchStart: TouchEventHandler = (e) => {
        lastYRef.current = e.touches[0].clientY;
    };
    const onTouchMove: TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current;
        if (deltaY > 0) {
            console.log('想看上面');
            setTranslateY(translateY + deltaY);
        } else {
            console.log('想看下面');
            setTranslateY(translateY + deltaY);
        }
        lastYRef.current = e.touches[0].clientY;
    };
    const onTouchEnd: TouchEventHandler = (e) => {
        setTranslateY(0);
    };

    return (
        <div className='react-ui-scroll' {...rest}>
            <div className='react-ui-scroll-inner'
                 style={{
                     right: -scrollbarWidth(),
                     transform: `translateY(${translateY}px)`
                 }}
                 ref={containerRef}
                 onScroll={onScroll}
                 onTouchMove={onTouchMove}
                 onTouchStart={onTouchStart}
                 onTouchEnd={onTouchEnd}>
                {children}
            </div>
            {barVisible &&
            <div className="react-ui-scroll-track">
                <div className="react-ui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                     onMouseDown={onMouseDownBar}
                />
            </div>
            }
        </div>
    );
};


export default Scroll;
