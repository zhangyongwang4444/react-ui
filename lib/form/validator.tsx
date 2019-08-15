import {FormValue} from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[]
}

function isEmpty(value: any) {
    return value === undefined || value === null || value === '';
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: any = {};
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.required) {
            if (value === undefined || value === null || value === '') {
                if (errors[rule.key] === undefined) {
                    errors[rule.key] = []
                }
                errors[rule.key].push('必填');
            }
        }
        if (rule.minLength) {
            if (!isEmpty(value) || value!.length < rule.minLength) {
                if (errors[rule.key] === undefined) {
                    errors[rule.key] = []
                }
                errors[rule.key].push('太短');
            }
        }
        console.log(rule);
    });
    return errors;
};

export default Validator;

