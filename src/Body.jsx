import React from 'react'
import './Body.css'
import Header from './Header'

import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';



function Body({spotify}) {
    const [{daily_mix}]=useDataLayerValue()
    // const playPlaylist=()=>{
    //     console.log('play')

    //     spotify.play({context_uri:'spotify:playlist:37i9dQZF1E37ls8Yx3iCDi'}).then(res=>{
    //         spotify.getMyCurrentPlayingTrack().then(r=>{
    //             dispatch({
    //                 type:"SET_ITEM",
    //                 item:r.item
    //             })
    //             dispatch({
    //                 type:'SET_PLAYING',
    //                 playing:true

    //             })
    //         })
    //     })
    // }

    // const playSong=(id)=>{
    //     console.log('play')
    //     spotify.play({
    //         uris:[`spotify:track:${id}`]
    //     }).then(res=>{
    //         spotify.getMyCurrentPlayingTrack().then(r=>{
    //             dispatch({
    //                 type:"SET_ITEM",
    //                 item:r.item
    //             })
    //             dispatch({
    //                 type:'SET_PLAYING',
    //                 playing:true

    //             })
    //         })
    //     })
    // }
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={daily_mix?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Daily Mix</h2>
                    <p>{daily_mix?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                <PlayCircleFilledIcon
            className="body__shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
                </div>
                {daily_mix?.tracks.items.map(item=>(
                    <SongRow track={item.track} 
                    // playSong={playSong}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body
