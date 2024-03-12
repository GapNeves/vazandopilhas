import { useState, FormEvent } from "react";
import { Cadastro } from "../types/Cadastro";
import { validate } from "../utils/ValidateCadastro";

const FormCad = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<Cadastro | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: Cadastro = {
      name,
      email,
      senha,
      agree,
    };

    const validateErrors = validate(data);

    console.log(data, validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setName("");
    setEmail("");
    setSenha("");
    setAgree(false);

    alert("Obrigado por cadastrar!");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
      <h1 className="font-bold text-[2rem] text-slate-600 flex flex-col items-center">
          Cadastre-se
        </h1>
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>

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

      <div className="flex flex-col">
        <a href="#" className="text-xs underline mg-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos.
          </label>
          {errors?.agree && (
            <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-slate-600 hover:bag-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default FormCad;
