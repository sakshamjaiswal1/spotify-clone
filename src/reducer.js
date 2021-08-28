export const initialState={
user:null,
playlist:[],
playing:false,
item:null,
// Remove after finish developing
token:'BQAawL86F6ARshYj3VIuckxrYRY1eHP2ah23PeZ23BTiK5Zma8GIK5AEvV24Zws-eNO7Bp8G9wFFVhlV6qAMcpDH0KHmi4sBFw1eA3Rj3Gj3cUc0JDdsTao5LyKzLbomnzADOHf0SISZ9JdhZ8cIkeFH2jkyO3CXbORp2MeE1HL6mQrGWC5h'

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
        default :
        return state
}


}

export default reducer