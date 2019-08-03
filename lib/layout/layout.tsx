import React from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss';

const sc = scopedClassMaker('react-ui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={[sc(), className].join(' ')} {...rest} >
            {props.children}
        </div>
    )
};

export default Layout;

