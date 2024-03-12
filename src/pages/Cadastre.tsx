import Form from "../components/Form";

const Cadastre = () => {
  return (
    <div>
      <h1 className="font-bold text-[2rem] text-white">Cadastre-se</h1>
      <p className="text-white">Cadastre-se para tirar suas duvidas.</p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
    </div>
  );
};

export default Cadastre;
