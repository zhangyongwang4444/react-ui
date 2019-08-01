import * as React from "react";
import './dialog.scss';
import {Fragment} from "react";
import {Icon} from "../index";

interface Props {
    visible:boolean;
}

const  Dialog:React.FunctionComponent<Props> =(props)=> {
    return(
        props.visible ?
            <Fragment>
                <div className="react-ui-dialog-mask"/>
                <div className="react-ui-dialog">
                    <div className="react-ui-dialog-close">
                        <Icon name="close"/>
                    </div>
                    <header className="react-ui-dialog-header">提示</header>
                    <main className="react-ui-dialog-main"> {props.children}</main>
                    <footer className="react-ui-dialog-footer">
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment> :
            null
    )
};

export default Dialog;

