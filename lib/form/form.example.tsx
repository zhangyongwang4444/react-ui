import * as React from "react";
import Form, {FormValue} from "./form";
import {useState, Fragment} from "react";
import Validator, {noError} from "./validator";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'frank',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'image', label: '头像', input: {type: 'image'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 16},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true}
        ];
        const errors = Validator(formData, rules);
        if (noError(errors)) {
            // 没错
        }
    };
    return (
        <div>
            <Form value={formData} fields={fields}
                  buttons={
                      <Fragment>
                          <button type="submit">提交</button>
                          <button>返回</button>
                      </Fragment>
                  }
                  errors={errors}
                  onChange={(newValue) => setFormData(newValue)}
                  onSubmit={onSubmit}
            />
        </div>
    )
};

export default FormExample;

