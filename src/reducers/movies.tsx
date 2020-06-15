import Movie from "../interfaces/movie";
import { MovieActionTypes, FETCH_ALL_MOVIES } from "../interfaces/movieActions";

const initialState: Movie[] = [];

const movies = (state = initialState, action: MovieActionTypes): Movie[] => { 
    switch (action.type) {
        case FETCH_ALL_MOVIES:
            return state;
        default:
            return state;
    }
}

export default movies;