import React from 'react'
  import {AiFillStepBackward,
          AiFillPlayCircle,
          AiFillPauseCircle,
          AiFillStepForward
} from "react-icons/ai";
import './Controls.css'

const Controls = ({ isPlaying, setIsPlaying, skipSong }) => {
  return (
    <div className='Controls'>
        <button className='btn btn-prev' onClick={() => skipSong(false)}>
              <AiFillStepBackward />
        </button>
        <button className='btn pause' onClick={() => {setIsPlaying(!isPlaying)}}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button className='btn btn-next' onClick={() => skipSong(true)}>
            <AiFillStepForward />
        </button>
        <div className='line'></div>
    </div>
  )
}

export default Controls