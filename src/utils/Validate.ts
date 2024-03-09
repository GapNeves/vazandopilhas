import { User } from "../types/User";

type Error = {
    [key: string]: string;
};


export const validate = (date: User) => {
    const errors: Error = {};
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!date.name) {
        errors["name"] = "O nome é obrigatorio";
    }
    if (typeof date.name !== "undefined" && date.name.length <= 10) {
        errors["name"] = "Insira o nome completo";
    }
    if (!date.email) {
        errors["email"] = "O Email é obrigatorio";
    } else if (!emailRegex.test(date.email)){
        errors["email"] = "Formato de email inválido";
    }
    if (date.agree === false) {
        errors["agree"] = "É necessário concordar com os termos";
    }
    return errors;
}