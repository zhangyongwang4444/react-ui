import * as React from "react";
import './dialog.scss';
import {Fragment, ReactElement, ReactNode} from "react";
import {Icon} from "../index";
import ReactDOM from 'react-dom';
import {scopedClassMaker} from "../helpers/classes";

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    closeOnclickMask?: boolean
}

const scopedClass = scopedClassMaker('react-ui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnclickMask) {
            props.onClose(e)
        }
    };
    const result = props.visible &&
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>提示</header>
                <main className={sc('main')}> {props.children}</main>
                {props.buttons && props.buttons.length > 0 &&
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
                }
            </div>
        </Fragment>;
    return (
        ReactDOM.createPortal(result, document.body)
    )
};

Dialog.defaultProps = {
    closeOnclickMask: false
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);  // 把组件从 div 上卸载下来
        div.remove();  // 再删除 div
    };
    const component =
        <Dialog
            onClose={() => {
                close();
                afterClose && afterClose();
            }}
            visible={true}
            buttons={buttons}
        >
            {content}
        </Dialog>;

    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
};

const alert = (content: string) => {
    const button = <button onClick={() => close()}>OK</button>;
    const close = modal(content, [button])
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>];
    const close = modal(content, buttons, no);
};


export {alert, confirm, modal}
export default Dialog;

