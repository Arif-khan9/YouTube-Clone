import React, { useEffect, useState } from 'react'
import './PlayVideo.css';
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
// import { useParams } from 'react-router-dom';


const PlayVideo = ({VideoId}) => {
    // console.log(useParams())
    const [apidata , setApidata] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const fetchVideoData = async () =>{
        // Fetching Videos Data 
        const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${VideoId}&key=${API_KEY}`;
        await fetch(VideoDetails_url).then(Response => Response.json()).then(data => setApidata(data.items[0]));
    
    }

    const fetchOtherData = async () =>{
        // Fetching Channel Data

        const ChannelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
        await fetch(ChannelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    }

    useEffect(()=>{
        fetchVideoData();
                
    },[])

    useEffect(()=>{
        fetchOtherData();
    },[apidata])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apidata?apidata.snippet.title: "Title Here"}</h3>
        <div className="play-video-info">
            <p>{apidata?value_converter(apidata.statistics.viewCount):"16k"} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():""}</p>
            <div className='flex'>
                <span><img src={like} alt="" />{apidata?value_converter(apidata.statistics.likeCount):155}</span>
                 <span><img src={ dislike} alt="" /></span>
                  <span><img src={share} alt="" />Share</span>
                   <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apidata?apidata.snippet.channelTitle:""}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
           <p>{apidata?apidata.snippet.description.slice(0,250):"Description Here"}</p>
            <hr />
            <h4>{apidata?value_converter(apidata.statistics.commentCount):102} Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action ">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action ">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action ">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
