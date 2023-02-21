import React from 'react'
import './Details.css'

const Details = ({song, isPlaying, setIsPlaying}) => {

  return (
    <div className='details'>
        <h2>
          {song.title}
        </h2>  <br/>
        <p>
          {song.athor}
        </p>
        <img src={song.img_src} alt={song.title} />
    </div>
  )
}

export default Details
