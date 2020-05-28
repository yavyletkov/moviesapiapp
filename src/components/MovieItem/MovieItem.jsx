import React, {useState} from "react";

const MovieItem = ({movie, addInToWatch, removeFromToWatch, toWatch}) => {

    let initialState = () => {
        if (toWatch.length) {
            for (let i = 0; i <= toWatch.length; i++) {
                if (toWatch[i]) {
                    if (toWatch[i].id === movie.id) {
                        return true
                    }
                }
            }
        }
        return false
    }

    let [added, setAdded] = useState(initialState);

    let onBtnClick = () => {
        if (!added) {
            addInToWatch(movie.id, movie.title);
            setAdded(true)
        }
        else {
            removeFromToWatch(movie.id, movie.title);
            setAdded(false)
        }
    }

    return (
        <div className='card'>
            <img className='card-img-top'
                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
                 alt=''>

            </img>

            <div className='card-body'>
                <h6 className='card-title'>{movie.title}</h6>
                <p>Rating: {movie.vote_average}</p>
                {!added ? <button className='btn btn-secondary' onClick={onBtnClick}>Add movie</button>
                    : <button className='btn btn-primary' onClick={onBtnClick}>Remove movie</button>}
            </div>

        </div>
    )
}

export default MovieItem;