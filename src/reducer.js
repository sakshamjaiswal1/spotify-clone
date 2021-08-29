export const initialState={
user:null,
playlists:[],
playing:false,
item:null,
dialy_mix:null,
// Remove after finish developing
token:null
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
      case "SET_DAILY_MIX":
          return{
              ...state,
              daily_mix:action.daily_mix
          }       
        default :
        return state
}


}

export default reducer