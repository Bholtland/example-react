import axios from 'axios';

export const movies_fetchAll = async ()=> {
    return dispatch: any => {
        const result = await axios.get('');
        dispatch({type: 'MOVIES_FETCHALL', result.data});
    }
}