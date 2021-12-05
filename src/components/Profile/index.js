import React from "react";



export function User(){
    const user = {
        "username": "Jacques Gluke",
        "tag": "jgluke",
        "location": "Ocho Rios, Jamaica",
        "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
        "stats": {
        "followers": 5603,
        "views": 4827,
        "likes": 1308
        }
    }

    return (
        <div className = "wrapper">
            <div className = "box">
            <div className = "header">
                    <img className = "avatar" src = {user.avatar}></img>
                    <h1>{user.username}</h1>
                    <h5>@{user.tag}</h5>
                    <h4>{user.location}</h4>
                </div>
                <div className = "footer">
                    <li className ="list">
                        <ul className = "info">
                            <h6>Followers
                                <h3></h3>{user.stats.followers}</h6>
                        </ul>
                        <ul className = "info">
                            <h6>Views
                                <h3></h3>{user.stats.views}</h6>
                        </ul>
                        <ul className = "info">
                            <h6>Likes
                                <h3></h3>{user.stats.likes}</h6>
                        </ul>
                    </li>
                </div>
            </div>
               
        </div>
      )
  }
 