import React, { useEffect, useState } from 'react'
import './PlayVideo.css';
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data';
// import { useParams } from 'react-router-dom';


const PlayVideo = ({VideoId}) => {
    // console.log(useParams())
    const [apidata , setApidata] = useState(null);
    const fetchVideoData = async () =>{
        // Fetching Videos Data 
        const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${VideoId}&key=${API_KEY}`;
        await fetch(VideoDetails_url).then(Response => Response.json()).then(data => setApidata(data.items[0]));
    
    }

    useEffect(()=>{
        fetchVideoData();
                
    },[VideoId])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apidata?apidata.snippet.title: "Title Here"}</h3>
        <div className="play-video-info">
            <p>1520 Views &bull; 2 days ago</p>
            <div className='flex'>
                <span><img src={like} alt="" />120</span>
                 <span><img src={ dislike} alt="" />2</span>
                  <span><img src={share} alt="" />Share</span>
                   <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Best channel to learn coding that help you to be a web developer</p>
            <hr />
            <h4>130 Comments</h4>
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
