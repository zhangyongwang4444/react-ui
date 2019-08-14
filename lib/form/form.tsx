import * as React from "react";
import {ReactFragment} from "react";

interface Props {
    value: { [K: string]: any };
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FunctionComponent<Props> = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map(f =>
                <div key={f.name}>
                    {f.label}
                    <input type={f.input.type}/>
                </div>
            )}
            <div>
                {props.buttons}
            </div>
        </form>
    )
};

export default Form;