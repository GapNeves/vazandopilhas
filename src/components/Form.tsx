import { usestate, FormEvent, useState } from "react";
import { User } from "../types/User";

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [agree, setsgree] = useState(false)

  const[erros, setErros] = useState<User | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Test");
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input type="text" placeholder="Digite o seu noem" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder: text-stone-400"/>
      </div>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input type="email" placeholder="Insira seu email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder: text-stone-400"/>
      </div>

      <div className="flex flex-col">
        <a href="#" className="text-xs underline mg-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos.
          </label>
        </div>
      </div>

      <button type="submit" className="bg-slate-600 hover:bag-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
        Cadastrar
      </button>

    </form>
  );
};

export default Form;
