import API from "../api/api";

let initialState = {
    currentPage: 1,
    movies: [],
    toWatch: [],
    sortBy: 'popularity.desc'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-MOVIES': {
            return {...state, movies: action.movies}
        }
        case 'ADD-IN-TO-WATCH': {
            let movie = {id: action.id, title: action.title};
            return {...state, toWatch: [...state.toWatch, movie]}
        }
        case 'REMOVE-FROM-TO-WATCH': {
            return {...state, toWatch: state.toWatch.filter(item => {
                return item.id !== action.id
            })}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'SET-SORT-BY': {
            return {...state, sortBy: action.method}
        }
        default: {
            return state;
        }
    }
}

export let getMovies = (sortBy, page) => (dispatch) => {
    API.getMovies(sortBy, page)
        .then(response => {
            console.log('ITEM', response.results[0])
            dispatch(setMovies(response.results));
        })
}

export let setMovies = (movies) => {return {type: 'SET-MOVIES', movies}};
export let addInToWatch = (id, title) => {return {type: 'ADD-IN-TO-WATCH', id, title}};
export let removeFromToWatch = (id, title) => {return {type: 'REMOVE-FROM-TO-WATCH', id, title}};
export let setCurrentPage = (page) => {return {type: 'SET-CURRENT-PAGE', page}};
export let setSortBy = (method) => {return {type: 'SET-SORT-BY', method}};


export default reducer;