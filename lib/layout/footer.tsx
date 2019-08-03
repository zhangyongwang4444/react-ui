import React from 'react';
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('react-ui-layout');
const Footer: React.FunctionComponent = () => {
    return (
        <div className={sc('footer')}>footer</div>
    )
};

export default Footer;
