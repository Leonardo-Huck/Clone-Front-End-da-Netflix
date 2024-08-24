import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsStarFill
} from 'react-icons/bs'

import MovieCard from "./MovieCard"
import { ImInfo } from "react-icons/im";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const Container = styled.div`
    
`
const MovieContainer = styled.div`

`
const H2 = styled.h2`

`
const H3 = styled.h3`

`
const Div = styled.div`

`
const Info = styled.div`

`
const P = styled.p`

`
const Img = styled.img`
`

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`
        getMovie(movieUrl)
    }, [])

    return (
        <Container>
            {movie &&
                <MovieContainer>
                    <H2>{movie.title}</H2>
                    <Div>
                        <Img src={imageUrl + movie.poster_path} alt={movie.title} />
                    </Div>
                    <Div>
                        <Info>
                            <H3><BsStarFill />Avaliação:</H3>
                            <P>{movie.vote_average}</P>
                        </Info>
                        <Info>
                            <H3><BsWallet2 />Orçamento:</H3>
                            <P>{(movie.budget).toLocaleString("en-US", { style: "currency", currency: "USD" })}</P>
                        </Info>
                        <Info>
                            <H3><BsGraphUp />Receita:</H3>
                            <P>{(movie.revenue).toLocaleString("en-US", { style: "currency", currency: "USD" })}</P>
                        </Info>
                        <Info>
                            <H3><BsHourglassSplit />Duração:</H3>
                            <P>{movie.runtime} minutos</P>
                        </Info>
                        <Info>
                            <H3><BsFillFileEarmarkTextFill />Descrição:</H3>
                            <P>{movie.overview}</P>
                        </Info>
                    </Div>
                </MovieContainer>}
        </Container>
    )
}

export default Movie