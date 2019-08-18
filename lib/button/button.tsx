import * as React from "react";
import {ButtonHTMLAttributes} from "react";
import classes from "../helpers/classes";
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal';
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className, children, level, ...restProps} = props;
    return (
        <button className={
            classes('react-ui-button', `react-ui-button-${level}`, className)
        }
                {...restProps}>
            {children}
        </button>
    )
};


Button.defaultProps = {
    level: "normal"
};

export default Button;