export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQAUlvfCC7dnoej_K-Qr-Yrg8nok55Oce57E4KKcsD8NIL2hHEQm0SXvbcoh3ZKBYEUO10CZD6pyzHSfM7iiUH1LQFqDmc-pXOWvwAWo7WJXtdMMmnFMjHtxl78KW567Koph6KJ-5Ai_yRKKpp2qu9pQjmbbrXWSjREh4p-V8fvxGhW9",
};

const reducer = (state, action) => {

    console.log(action);


    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;

    }


}

export default reducer;