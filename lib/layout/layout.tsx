import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss';
import Aside from "./aside";

const sc = scopedClassMaker('react-ui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    console.log(props.children);
    const children = props.children as Array<ReactElement>;
    const hasAside = (children.length) &&
        children.reduce((result, node) => result || node.type === Aside, false);
    return (
        <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest} >
            {props.children}
        </div>
    )
};

export default Layout;

