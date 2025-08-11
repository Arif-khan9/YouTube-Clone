import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommeneded from '../../Components/Recommeneded/Recommeneded'
import { useParams } from 'react-router-dom'

const Video = () => {
  

  const {videoId,categoryId } = useParams();

  return (
    <div className='play-container'>
      <PlayVideo VideoId={videoId} />
      <Recommeneded  categoryId={categoryId}/>
    </div>
  )
}

export default Video
