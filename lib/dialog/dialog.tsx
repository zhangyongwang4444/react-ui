import * as React from "react";
import './dialog.scss';
import {Fragment} from "react";

interface Props {
    visible:boolean;
}

const  Dialog:React.FunctionComponent<Props> =(props)=> {
    return(
        props.visible ?
            <Fragment>
                <div className="react-ui-dialog-mask"></div>
                <div className="react-ui-dialog">
                    {props.children}
                </div>
            </Fragment> :
            null
    )
};

export default Dialog;

