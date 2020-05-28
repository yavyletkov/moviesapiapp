import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {addInToWatch, getMovies, removeFromToWatch, setMovies} from "../../redux/reducer";
import MovieItem from "../MovieItem/MovieItem";
import s from './CardsWrapper.module.scss'

const CardsWrapper = ({getMovies, ...props}) => {

    useEffect(() => {
        getMovies(props.sortBy, props.currentPage)
    }, [getMovies, props.currentPage, props.sortBy]);

    return (
        <main className={s.cardsWrapper}>

            {props.movies.map((movie) => {
                return <MovieItem key={movie.id} movie={movie}
                                  toWatch={props.toWatch}
                                  addInToWatch={props.addInToWatch}
                                  removeFromToWatch={props.removeFromToWatch}/>
            })}

        </main>
    )
}

const mstp = (state) => {
    return {
        movies: state.movies,
        currentPage: state.currentPage,
        sortBy: state.sortBy,
        toWatch: state.toWatch
    }
};

export default connect(mstp, {setMovies, getMovies, addInToWatch, removeFromToWatch})(CardsWrapper);