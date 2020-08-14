import React, {HTMLAttributes} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    return (
        <div className='react-ui-scroll' {...rest}>
            <div className='react-ui-scroll-inner' style={{right: -scrollbarWidth()}}>
                {children}
            </div>
        </div>
    );
};

export default Scroll;