import React, {HTMLAttributes, UIEventHandler, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const onScroll: UIEventHandler = (e) => {

    };
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => { //mounted
        const scrollHeight = containerRef.current!.scrollHeight;
        const viewHeight = containerRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);

    }, []);
    return (
        <div className='react-ui-scroll' {...rest}>
            <div className='react-ui-scroll-inner' style={{right: -scrollbarWidth()}}
                 ref={containerRef}
                 onScroll={onScroll}>
                {children}
            </div>
            <div className="react-ui-scroll-track">
                <div className="react-ui-scroll-bar" style={{height: barHeight}}/>
            </div>
        </div>
    );
};

export default Scroll;