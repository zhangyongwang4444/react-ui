import React from 'react';
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('react-ui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('aside', {extra: className})} {...rest} >
            aside
        </div>
    )
};

export default Aside;

