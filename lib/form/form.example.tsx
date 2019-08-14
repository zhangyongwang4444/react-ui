import * as React from "react";
import Form, {FormValue} from "./form";
import {useState, Fragment} from "react";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'frank',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        axios.post('/sigin', formData).then(success, fail)
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
                  onChange={(newValue) => setFormData(newValue)}
                  onSubmit={onSubmit}
            />
        </div>
    )
};

export default FormExample;

