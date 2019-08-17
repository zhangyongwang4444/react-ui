import * as React from "react";
import {InputHTMLAttributes} from "react";
import classes from "../helpers/classes";
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {


}

const Input: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <input className={classes('react-ui-input', className)}
               {...restProps}/>
    )
};

export default Input;
