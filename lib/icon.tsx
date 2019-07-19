import * as React from "react";
import './importAllIcons';
import './icon.scss'

interface IconProps {
    name: string;
    onClick:React.MouseEventHandler;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span >
            <svg className="react-ui-icon" onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};

export default Icon;

