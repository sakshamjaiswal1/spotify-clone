export const initialState={
user:null,
playlists:[],
playing:false,
item:null,
// Remove after finish developing
token:'BQD-dMyQ4XX-r2B0oKEzv1dbUkREUidEIJpQrcJyRiBrPq9QOTanGea3RZUMfY2J6OuVn6pjU24omzg4bnyGKnG2OBpc1O2G9O1hEV89zNQM1H9ruTpZP_n0spyp-mJSccQH6alohNBDRL8asppdv8UAW8MbMeu2vjNtFvagl4BAm0W7Mzg3'
}

const reducer =(state,action)=>{
console.log(action)

// Action-> type and payload 

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }  
     case "SET_PLAYLIST":
         return {
             ...state,
             playlists:action.playlists
         }     
        default :
        return state
}


}

export default reducer