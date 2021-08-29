import { useEffect  } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi()

function App() {

const [{token},dispatch]=useDataLayerValue()

// Runs code on a given condition
  useEffect(()=>{
const hash=getTokenFromUrl()

window.location.hash=''
const _token=hash.access_token
// console.log('i have a token',_token)
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
  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:"SET_PLAYLIST",
      playlists:playlists
      
    })
    // console.log(playlists)
  })
}
spotify.getPlaylist('37i9dQZF1E37ls8Yx3iCDi').then(response=>{
  dispatch({
    type:"SET_DAILY_MIX",
    daily_mix:response,

  })
})


},[dispatch])


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

