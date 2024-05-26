import React, { useEffect } from 'react'
import picture from '../assets/image.png'
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, toggleFavorite } from '../Redux/slice/movieSlice';

const Cards = () => {
    // const [favorites, setFavorites] = useState({});

    // const toggleFavorite = (id) => {
    //     setFavorites(prevFavorites => ({
    //         ...prevFavorites,
    //         [id]: !prevFavorites[id]
    //     }));
    // };
    const dispatch = useDispatch()
    const { data: movies, isLoading, isError, favorites } = useSelector(state => state.movie)

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        )
    }

    if (isError) {
        return <div className='errormessage'><p>Encountered error</p></div>;
    }

    const handleRedirect = (url) => {
        window.location.href = url
    }

    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

    return (
        <>
            <h2 className='favHead'>All Movies :)</h2>
            <div className='allCards'>
                {sortedMovies.map((m) => (
                    <div className='card' key={m.id}>
                        <p className='error'>?</p>
                        <img
                            src={picture}
                            alt={m.movie}
                            className='cardImg'
                            onClick={() => handleRedirect(m.imdb_url)}
                        />
                        <div className='attributes'>
                            <div className='desc'>
                                <p className='name'>{m.movie}</p>
                                <p className='ratings'><span>{m.rating}</span>/10</p>
                            </div>
                            <a href={m.imdb_url} className='btn' rel="noreferrer" target='_blank'>IMDb</a>
                            <MdFavorite
                                className={`likeIcon ${favorites.includes(m.id) ? 'favorite' : 'not-favorite'}`}
                                onClick={() => dispatch(toggleFavorite(m.id))}
                            />
                        </div>
                    </div>
                ))}

            </div></>

    )
}

export default Cards