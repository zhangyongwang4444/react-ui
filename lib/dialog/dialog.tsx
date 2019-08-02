import * as React from "react";
import './dialog.scss';
import {Fragment, ReactElement} from "react";
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

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
    const x = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>提示</header>
                <main className={sc('main')}> {props.children}</main>
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                        React.cloneElement(button, {key: index})
                    )}
                </footer>
            </div>
        </Fragment> :
        null;
    return (
        ReactDOM.createPortal(x, document.body)
    )
};

Dialog.defaultProps = {
    closeOnclickMask: false
};

const alert = (content: string) => {
    const component = <Dialog
        onClose={() => {
            ReactDOM.render(React.cloneElement(component, {visible: false}), div);
            ReactDOM.unmountComponentAtNode(div);  // 把组件从 div 上卸载下来
            div.remove();  // 再删除 div
        }}
        visible={true}
    >{content}</Dialog>;

    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
};

export {alert}
export default Dialog;

