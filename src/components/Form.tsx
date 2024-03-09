const Form = () => {
  return (
    <form className="flex flex-col gap-3">

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
        <div>
          <input type="checkbox" />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos.
          </label>
        </div>
      </div>

      <button>
        Cadastrar
      </button>

    </form>
  );
};

export default Form;
