import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from 'react';
import MovieCard from "./MovieCard";

const Carrossel = ({ movies }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={8}
        itemsToScroll={1}
        forwardBtnProps={{
            style: {
                alignSelf: 'center',
                background: 'black',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
                margin: 10,
            },
            children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
            style: {
                alignSelf: 'center',
                background: 'black',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
                margin: 10,
            },
            children: <span>{`<`}</span>,
        }}
        responsiveProps={[
            { minWidth: 1200, maxWidth: 1400, itemsToShow: 6 },
            { minWidth: 900, maxWidth: 1200, itemsToShow: 4 },
            { minWidth: 600, maxWidth: 900, itemsToShow: 3 },
            { maxWidth: 600, itemsToShow: 2 }
        ]}
        speed={400}
        easing="linear"
    >
        {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </ReactSimplyCarousel>
}

export default Carrossel