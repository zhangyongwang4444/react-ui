import * as React from "react";
import Form, {FormValue} from "./form";
import {useState, Fragment} from "react";
import Validator, {noError} from "./validator";
import Button from "../button/button";

const usernames = ['frank', 'frankfrank', 'zhangyongwang', 'jack', 'alice', 'bob','zyw44444'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
    // setTimeout(() => {
    console.log('我现在知道用户名是否存在了');
    if (usernames.indexOf(username) >= 0) {
        succeed();
    } else {
        fail();
    }
    // }, 3000);
};

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'frank',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 16},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {
                key: 'username', validator: {
                    validatorName: 'unique',
                    validate(username: string) {
                        console.log('有人调用了 validate 了 ！');
                        return new Promise<void>((resolve, reject) => {
                            checkUserName(username,
                                () => {
                                    resolve();
                                    console.log('用户名已经存在');
                                    this.validatorName = 'usernameIsExisted';
                                },
                                () => {
                                    reject();
                                    console.log('用户名不存在');
                                    this.validatorName = 'usernameIsNotExisted';
                                });
                        });
                    }
                }
            },
            {key: 'password', required: true}
        ];
        Validator(formData, rules, (errors) => {
            setErrors(errors);
            console.log('errors');
            console.log(errors);
            if (noError(errors)) {
            }
        });
    };

    const transformError = (message: string) => {
        const map: any = {
            unique: 'username is existed or not',
            required: 'required',
            minLength: 'too short',
            maxLength: 'too long',
            pattern: 'Incorrect format',
            usernameIsExisted: 'username is existed',
            usernameIsNotExisted: 'username is not existed'
        };
        return map[message]
    };
    return (
        <div>
            <Form value={formData}
                  fields={fields}
                  errors={errors}
                  buttons={
                      <Fragment>
                          <Button type="submit" level='important'>提交</Button>
                          <Button>返回</Button>
                      </Fragment>
                  }
                  onChange={(newValue) => setFormData(newValue)}
                  onSubmit={onSubmit}
                  transformError={transformError}
            />
        </div>
    )
};

export default FormExample;

