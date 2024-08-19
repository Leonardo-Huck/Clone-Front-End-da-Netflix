import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const imageUrl = import.meta.env.VITE_IMG

const Img = styled.img`
    max-width: 10rem;
    width: 10rem;
    height: 14rem;
    border-radius: 2px;
`
const H2 = styled.h2`
    color: white;
    font-size: 1rem;
    font-weight: 400;
`
const Div = styled.div`
    margin: 0 0.2rem 0 0.2rem;
`
const P = styled.p`
    color: #a3a315;
`

const MovieCard = ({ movie }) => {
    return <Div>
        <Img src={imageUrl + movie.poster_path} alt={movie.title} />
        {/* <H2>{movie.title}</H2>
        <P>
            <FaStar /> {movie.vote_average}
        </P> */}
    </Div>
}


export default MovieCard