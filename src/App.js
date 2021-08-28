import { useEffect ,useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi()

function App() {

const [{user,token},dispatch]=useDataLayerValue()

// Runs code on a given condition
  useEffect(()=>{
const hash=getTokenFromUrl()

window.location.hash=''
const _token=hash.access_token
console.log('i have a token',_token)
if(_token){
dispatch({
  type:'SET_TOKEN',
  token:_token,
}) 
  spotify.setAccessToken(_token)
  spotify.getMe().then(user=>{
    dispatch({
      type:'SET_USER',
      user: user
    })
    
  })
}

},[])



  return (
    <div className="app">
  {
    token ? (<Player spotify={spotify}/>):(<Login/>)
  }

   
    </div>
  );
}

export default App;
// f8b5c24a562c495db22e884fceaa3654

