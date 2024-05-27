import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import picture from '../assets/image.png';
import { MdFavorite } from 'react-icons/md';
import { toggleFavorite } from '../Redux/slice/movieSlice';
import toast, { Toaster } from 'react-hot-toast';


const Favs = () => {
    const dispatch = useDispatch()
    const { data: movies, favorites, isLoading, isError } = useSelector(state => state.movie);
    const favoriteMovies = favorites.map(favoriteId => movies.find(m => m.id === favoriteId));

    const notify = () => toast.success('Movie removed from favorites', {
        style: {
            border: 'none',
            padding: '16px',
            color: '#006A4E',
        },
        iconTheme: {
            primary: '#006A4E',
            secondary: '#FFFAEE',
        },
    })

    const handleToggle = (id) => {
        dispatch(toggleFavorite(id))
        notify()
    }
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
    return (
        <div className='fav'>
            <h2 className='favHead'>Favorite Movies </h2>
            <div className='allCards'>
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((m) => (
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
                                <a href={m.imdb_url} className='btn' rel="noreferrer" target='_blank'>Visit</a>
                                <MdFavorite
                                    className={`likeIcon ${favorites.includes(m.id) ? 'favorite' : 'not-favorite'}`}
                                    onClick={() => handleToggle(m.id)}
                                />
                            </div>
                            <Toaster position="center" />
                        </div>
                    ))
                ) : (
                    <p className='no'>No favorite movies added yet.</p>
                )}
            </div>
        </div>

    );
};

export default Favs;
