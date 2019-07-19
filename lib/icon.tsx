import * as React from "react";
import './importAllIcons';
import './icon.scss'
import {SVGAttributes} from "react";

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
    onClick:React.MouseEventHandler<SVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span >
            <svg className="react-ui-icon"
                 onClick={props.onClick}
                 onMouseEnter={props.onMouseEnter}
                 onMouseLeave={props.onMouseLeave}
            >
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};

export default Icon;

