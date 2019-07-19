import * as React from "react";
import {SVGAttributes} from "react";
import './importAllIcons';
import './icon.scss';
import classes from './helpers/classes';


interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,...restProps} = props;
    return (
        <span >
            <svg className={classes('react-ui-icon',className)}
                 {...restProps}
            >
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};

export default Icon;


