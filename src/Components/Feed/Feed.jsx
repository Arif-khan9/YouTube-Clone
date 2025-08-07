import React, { useEffect, useState } from 'react'
import { value_converter } from '../../data'
import moment from 'moment';

import './Feed.css'
// import thumbnail1 from '../../assets/thumbnail1.png'

import { API_KEY } from '../../data'
import { Link } from 'react-router-dom'


const Feed = ({category}) => {

    const [data , setData] = useState([])

    const fetchData = async () =>{
        const VideoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(VideoList_url).then(res => res.json()).then(data=>setData(data.items))
    }
    useEffect(()=>{
        fetchData()
    },[category])
  return (
    <div className="feed">
        {data.map((item,index)=>{
            return(
               <Link key={index} to={`/video/${item.snippet.category}/4521` } className='card'>
                {console.log(item.snippet.category)}
                
               <img src={item.snippet.thumbnails.medium.url} alt="" />
               <h2>{item.snippet.title}</h2>
               <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
               </Link>
            )
        })}
    
    </div>
    
  )
}

export default Feed
