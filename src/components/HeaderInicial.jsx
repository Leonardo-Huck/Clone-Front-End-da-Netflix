import logo from '../assets/Netflix-Logo-500x281.png'
import { FaSistrix } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import avatar from "../assets/img-perfil-3.png"
import './HeaderInicial.css'
import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import UserContext from '../context/UserContext'


const DivBusca = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    gap: 1rem;
`
const Input = styled.input`
    border: none;
    background-color: rgba(255,255,255, 0.6);
    width: 15rem;
    border-radius: 5px;
`
const HeaderInicial = () => {
    const { imgPerfil } = useContext(UserContext)

    useEffect(() => {
        var nav = document.getElementById('Header');
        window.addEventListener("scroll", function (event) {
            if (window.scrollY > 10) {
                nav.style.background = "rgb(20, 20, 20)";
            }
            else {
                nav.style.background = "transparent";
            }
        });
    }, []);

    return (
        <div className='Header' id='Header'>
            <div className='Header'>
                <img src={logo} id='logo' />
            </div>
            <div id='nav'>
                <a href="#">Início</a>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Bombando</a>
                <a href="#">Minha lista</a>
                <a href="#">Navegar por idiomas</a>
            </div>
            <div id='div-busca'>
                <DivBusca>
                    <FaSistrix className='icon-lupa' />
                    <Input type="text" />
                </DivBusca>
                <a href="#">Infantil</a>
                <FaRegBell className='icon-sino' />
                <img src={imgPerfil} id='avatar' />
            </div>
        </div>
    )
}

export default HeaderInicial