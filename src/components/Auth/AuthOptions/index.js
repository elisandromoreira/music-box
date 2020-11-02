import './index.scss'

export default function AuthOptions({setSelectedForm}) {

  return(
    <div className="auth-options">
      <h2>Suas músicas preferidas onde você estiver</h2>
      <button className="register" onClick={() => setSelectedForm('register')}>
        Registrar-se Grátis
      </button>

      <button className="login" onClick={() => setSelectedForm('register')}>
        Iniciar Seção
      </button>
    </div>
  );
}