import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommeneded from '../../Components/Recommeneded/Recommeneded'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommeneded/>
    </div>
  )
}

export default Video
