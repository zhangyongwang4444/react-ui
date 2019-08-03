import React from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss';

const sc = scopedClassMaker('react-ui-layout');
const Layout: React.FunctionComponent = (props) => {
    return (
        <div className={sc()}>
            {props.children}
        </div>
    )
};

export default Layout;
