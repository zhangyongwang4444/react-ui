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

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    return {}
};

export default Validator;