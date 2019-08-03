import React from 'react';
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('react-ui-layout');
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>header</div>
    )
};

export default Header;
