import React, { useEffect, useRef, useState } from 'react'
import Controls from '../Controls/Controls'
import Details from '../Details/Details'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'

const Player = ( { song, currentIndex, setCurrentIndex, sourse } ) => { 
  const audioEl = useRef(null)
  const [isPlaying,setIsPlaying] = useState(false)

    useEffect(() => {
      if(isPlaying) {
        audioEl.current.play()
      } else {
        audioEl.current.pause()
      }
    }, [isPlaying, currentIndex])

    function skipSong(isNext = true) {
      if(isNext) {
        let ind = currentIndex
        ind++
        if(ind > sourse.length - 1) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex((currentIndex) => currentIndex + 1)
        }
      } else {
        let ind = currentIndex
        ind--
        if(ind < 0) {
          setCurrentIndex(sourse.length - 1)
        } else{
          setCurrentIndex((currentIndex) => currentIndex - 1)
        }
      }
    }


  return (
    <div className='player'>
        <Sidebar />
        <audio ref={audioEl} src={song.src} >
          
        </audio>
        <Details  song={song} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong}/>
    </div>
  )
}

export default Player