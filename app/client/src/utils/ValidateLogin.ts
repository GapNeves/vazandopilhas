import { Login } from "../types/Login";

type Error = {
    [key: string]: string;
};


export const validate = (date: Login) => {
    const errors: Error = {};
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!date.email) {
        errors["email"] = "O Email é obrigatorio";
    } else if (!emailRegex.test(date.email)){
        errors["email"] = "Formato de email inválido";
    }
    if (!date.senha) {
        errors["senha"] = "Senha obrigatoria";
    }
    if (typeof date.senha !== "undefined" && date.senha.length < 6) {
        errors["senha"] = "Senha deve ter no minimo 6(seis) caracters"
    }
    return errors;
}