const Form = () => {
  return (
    <form>

      <div>
        <label htmlFor="name">
          Nome
        </label>
        <input type="text" placeholder="Digite o seu noem" />
      </div>

      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input type="email" placeholder="Insira seu email"/>
      </div>

      <div>
        <a href="#">
          Leia os termos
        </a>
        <div>
          <input type="checkbox" />
          <label htmlFor="agree">
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
