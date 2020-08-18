import React, {HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
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
    const onScroll: UIEventHandler = (e) => {
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
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
        console.log('start');
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            console.log(firstBarTopRef.current + delta);
            setBarTop(firstBarTopRef.current + delta);
        }
    };
    const onMouseUpBar = () => {
        draggingRef.current = false;
        console.log('end');
    };
    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        return () => {
            document.removeEventListener('mouseup', onMouseMoveBar);
            document.removeEventListener('mousemove', onMouseMoveBar);
        };
    }, []);
    return (
        <div className='react-ui-scroll' {...rest}>
            <div className='react-ui-scroll-inner' style={{right: -scrollbarWidth()}}
                 ref={containerRef}
                 onScroll={onScroll}>
                {children}
            </div>
            <div className="react-ui-scroll-track">
                <div className="react-ui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                     onMouseDown={onMouseDownBar}
                />
            </div>
        </div>
    );
};


export default Scroll;
