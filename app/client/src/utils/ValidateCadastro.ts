import { Cadastro } from "../types/Cadastro";

type Error = {
    [key: string]: string;
};


export const validate = (date: Cadastro) => {
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
    if (!date.senha) {
        errors["senha"] = "Senha obrigatoria";
    }
    if (typeof date.senha !== "undefined" && date.senha.length < 6) {
        errors["senha"] = "Senha deve ter no minimo 6(seis) caracteres"
    }
    return errors;
}