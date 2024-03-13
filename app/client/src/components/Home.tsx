import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="w-100 mt-4 bg-slate-300 px-4 py-5 rounded-lg flex flex-col items-center justify-center">
        <h1 className="font-bold text-[2rem] text-slate-900">Vazando Pilhas🔋</h1>
        <div className="w-full flex flex-lin justify-center">
          <button className="m-0.5 bg-slate-800 hover:bag-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white" onClick={() => {
            navigate('/cadastre')
          }}>
            Cadastrar
          </button>
          <button className="m-0.5 bg-slate-800 hover:bag-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white" onClick={() => {
            navigate('/login')
          }}>
            Login
          </button>
        </div>
        <p className="text-slate-900 text-xs w-96 mt-2 text-center">
          Nessa comunidade você tera liberdade de fazer perguntas e poder
          receber respostas de pessoas voluntarias que te ajudaram em suas
          duvidas.
        </p>
    </div>
  )
}

export default Home