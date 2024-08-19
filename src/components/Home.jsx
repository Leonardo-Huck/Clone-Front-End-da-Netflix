import ReactSimplyCarousel from 'react-simply-carousel';
import "./Home.css"
import styled from "styled-components"
import destaque from "../assets/fundo-pagina-inicial.jpg"
import beyblade from "../assets/beyblade.png"
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Carrossel from './Carrossel';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`
const Destaque = styled.div`
    max-width: 100%;
    position: static;
    padding-top: 10rem;
    padding-bottom: 10rem;
    width: auto;
    background-repeat: no-repeat;
    background: linear-gradient(90deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0) 70%), url(${destaque}) no-repeat;
    background-size: 100%;
    padding-left: 3rem;
`
const ImgDestaque = styled.img`

`
const H2 = styled.h2`
    color: white;
    width: 50%;
    font-size: 1.2rem;
    font-weight: 600;
`
const DivDestaque = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 30%;
    gap: 0.8rem;
`
const ButtonAssistir = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 30%;
`
const ButtonMaisInformacoes = styled.button`
    color: white;
    background-color: rgba(94, 93, 93, 0.5);
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    width: 60%;
`
const H3 = styled.h3`
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 6rem;
`

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const getMovies = async (topurl, nowurl, popurl, upurl) => {
        const topres = await fetch(topurl);
        const topdata = await topres.json();
        setTopMovies(topdata.results)

        const nowres = await fetch(nowurl);
        const nowdata = await nowres.json();
        setNowMovies(nowdata.results)

        const popres = await fetch(popurl);
        const popdata = await popres.json();
        setPopularMovies(popdata.results)

        const upres = await fetch(upurl);
        const updata = await upres.json();
        setUpcomingMovies(updata.results)

    }

    useEffect(() => {
        const topRatedurl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`
        const nowPlayingurl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`
        const popularurl = `${moviesURL}popular?${apiKey}&language=pt-BR`
        const upComingurl = `${moviesURL}upcoming?${apiKey}&language=pt-BR`

        getMovies(topRatedurl, nowPlayingurl, popularurl, upComingurl);
    }, [])

    return (
        <Container id="home">
            <Destaque id="destaque">
                <ImgDestaque src={beyblade}></ImgDestaque>
                <H2>Dois irmãos treinam para se tornar lendas do Beyblade e começam uma revolução capaz de derrubar a elite do esporte.</H2>
                <DivDestaque>
                    <ButtonAssistir><FaPlay className='play' /><strong>Assistir</strong></ButtonAssistir>
                    <ButtonMaisInformacoes><IoIosInformationCircleOutline className='info' /><strong>Mais Informações</strong></ButtonMaisInformacoes>
                </DivDestaque>
            </Destaque>
            <H3>Melhores Avaliados</H3>
            <Carrossel movies={topMovies} />
            <H3>Em Cartaz</H3>
            <Carrossel movies={nowMovies} />
            <H3>Mais populares</H3>
            <Carrossel movies={popularMovies} />
            <H3>Proximos Lançamentos</H3>
            <Carrossel movies={upcomingMovies} />
        </Container >
    )
}


export default Home