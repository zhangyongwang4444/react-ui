import * as React from "react";
import {InputHTMLAttributes} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {


}

const Input: React.FunctionComponent<Props> = () => {
    return (
        <input type="text"/>
    )
};

export default Input;