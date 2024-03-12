import { useState, FormEvent } from "react";
import { Login } from "../types/Login";
import { validate } from "../utils/ValidateCadastro";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errors, setErrors] = useState<Login | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: Login = {
      email,
      senha,
    };

    const validateErrors = validate(data);

    console.log(data, validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setEmail("");
    setSenha("");

    alert("Obrigado por cadastrar!");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h1 className="font-bold text-[2rem] text-slate-600 flex flex-col items-center">
          Login
        </h1>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            placeholder="Insira seu email"
            className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors?.email && (
            <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            placeholder="Insira sua senha"
            className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errors?.senha && (
            <small className="text-xs text-red-500 mt-1">{errors?.senha}</small>
          )}
        </div>

        <button
          type="submit"
          className="m-2.5 bg-slate-600 hover:bag-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
