import './style.css';
import Logo from '../../assets/logo.svg'


function LoginUsuario() {


    return (
        <div className="App">
            <header className='header'>
                <img className='header_img' src={Logo}></img>
                <h1 className='header_h1'>Dindin</h1>
            </header>
            <div className='div'>
                <section className='section-one'>
                    <p className='section_p-first'>
                        Controle suas <span className='section-one_span'>finanças</span>, sem planilha chata.
                    </p>
                    <p className='section_p-second'>
                        Organizar as suas finanças nunca foi tão fácil,
                        com o DINDIN, você tem tudo num único lugar e em um clique de distância.
                    </p>
                    <button className='btn_section-one'>
                        Cadastre-se
                    </button>
                </section>
                <section className='section-two'>
                    <span className='section-two_span'>
                        Login
                    </span>
                    <label className='label' for='input_email'>E-mail</label>
                    <input id='input_email' className='input' type='e-mail'></input>
                    <label className='label' for='input_password'>Senha</label>
                    <input id='input_password' className='input' type='password'></input>
                    <button className='btn_section-two'>Entrar</button>
                </section>
            </div>
        </div>
    );




}

export default LoginUsuario;