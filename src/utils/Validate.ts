import { User } from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (date: User) => {
    const errors: Error = {};

    if(!date.name) {
        errors["name"] = "O nome é obrigatorio";
    }
    return errors;
}