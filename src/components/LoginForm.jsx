import './LoginForm.css'
import fundo from '../assets/imagem-fundo-netflix.jpg'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext.jsx'
import { Navigate } from 'react-router-dom'



const LoginForm = () => {

    const { isLogged, setIsLogged } = useContext(UserContext)
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.body.style.background = `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${fundo})`;
    }, []);

    const handleLogin = () => {
        setIsLogged(true);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to='/perfil' />;
    }

    return (
        <div className='formContainer'>
            <form>
                <h1>Entrar</h1>
                <input type="text" placeholder="Email ou número de celular" className='inputForm' id='email' />
                <input type="password" placeholder="Senha" className='inputForm' />
                <button type='button' id='entrar' onClick={handleLogin}>Entrar</button>
                <label id='ou'>OU</label>
                <button type='button' id='codigo'>Usar um código de acesso</button>
                <a href="#" className='link'>Esqueceu a senha?</a>
            </form>
            <label htmlFor="lembre-se" id="label-lembrar">
                <input type="checkbox" name="lembre-se" id="lembrar" />
                Lembre-se de mim
            </label>
            <p>Novo por aqui? <a href="#" className='link'>Assine agora</a>.</p>
            <p id='saiba'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
        </div>
    )
}

// const body = document.getElementById('body');
// document.addEventListener("DOMContentLoaded", () => {
//     
// })

export default LoginForm