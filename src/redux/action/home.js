import Axios from "axios"
import { API_HOST } from "../../config"
import {showMessage} from '../../utils/ShowMessage/index';

export const getFoodData = () => (dispatch) => {
    Axios.get(`${API_HOST.url}/food`)
    .then((res) => {
        console.log('res food: ', res.data.data.data)
        dispatch({type: 'SET_FOOD', value: res.data.data.data})
    })
    .catch((err) => {
        console.log('err: ', err)
        showMessage(
            `${err?.response?.data?.message} on Food Api` ||
            'Terjadi kesalahan di API Food'
        )
    })
}

export const getFoodDataByTypes = (types) => (dispatch) => {
    Axios.get(`${API_HOST.url}/food?types=${types}`)
    .then((res) => {
        if (types === 'new_food') {
            dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data})
        }
        if (types === 'popular') {
            dispatch({type: 'SET_POPULAR', value: res.data.data.data})
        }
        if (types === 'recomended') {
            dispatch({type: 'SET_RECOMENDED', value: res.data.data.data})
        }
    })
    .catch((err) => {
        // console.log('err: ', err)
        showMessage(
            `${err?.response?.data?.message} on Food By Type API` ||
            'Terjadi kesalahan di API Food By Type'
        )
    })
}