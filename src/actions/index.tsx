import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { FETCH_ALL_MOVIES } from '../interfaces/movieActions';

export const movies_fetchAll = (dispatch: Dispatch) => {
    return async (dispatch: Dispatch):Promise<void> => {
        const result: AxiosResponse = await axios.get('');
        const data: object = result.data;
        dispatch({type: FETCH_ALL_MOVIES, data});
    }
}