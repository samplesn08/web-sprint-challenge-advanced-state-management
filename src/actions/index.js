import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_SMURFS_FAIL, payload: err })
        })
}

export const addSmurf = (name, nickname, position, description) => {
    return {
        type: ADD_SMURF,
        payload: {name: name, nickname: nickname, position: position, description: description}
    }
}

export const addError = (newError) => {
    return {
        type: ADD_ERROR,
        payload: newError
    }
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.