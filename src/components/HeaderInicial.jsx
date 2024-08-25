import Imgperfil1 from '../assets/img-perfil-1.png';
import Imgperfil2 from '../assets/img-perfil-2.png';
import Imgperfil3 from '../assets/img-perfil-3.png';
import Imgperfil4 from '../assets/img-perfil-4.png';
import Imgperfil5 from '../assets/img-perfil-5.png';
import logo from '../assets/Netflix-Logo-500x281.png'
import { FaSistrix } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

import './HeaderInicial.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DivBusca = styled.form`
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
const Button = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0 auto;
    width: 2rem;
    color: rgba(255, 255, 255, 0.8);
`

const HeaderInicial = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    }

    let imgPerfil = Imgperfil1;
    const dataPerfil = localStorage.getItem('perfil')

    if (dataPerfil == 2) {
        imgPerfil = Imgperfil2
    } else if (dataPerfil == 3) {
        imgPerfil = Imgperfil3
    } else if (dataPerfil == 4) {
        imgPerfil = Imgperfil4
    } else if (dataPerfil == 5) {
        imgPerfil = Imgperfil5
    }

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
                <Link to={'/'}><img src={logo} id='logo' /></Link>
            </div>
            <div id='nav'>
                <Link to={'/'}><a href="#">Início</a></Link>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Bombando</a>
                <a href="#">Minha lista</a>
                <a href="#">Navegar por idiomas</a>
            </div>
            <div id='div-busca'>
                <DivBusca onSubmit={handleSubmit}>
                    <Button type='submit'><FaSistrix className='icon-lupa' /></Button>
                    <Input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search} />
                </DivBusca>
                <a href="#">Infantil</a>
                <FaRegBell className='icon-sino' />
                <img src={imgPerfil} id='avatar' />
            </div>
        </div>
    )
}

export default HeaderInicial