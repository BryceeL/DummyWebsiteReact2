import React, { useState, useEffect } from "react"
import axios from 'axios'

import MiniPost from "../MiniPost/MiniPost"

import "./PostFeed.css"

function PostFeed(props) {
  const {allPosts, userId} = props
  const [postFeed, setPostFeed] = useState([])

  useEffect(() => {
    if (allPosts === true) {
      axios.get("http://3.17.148.157:8000/posts/all_posts/")
      .then((response) => {
        setPostFeed(response.data)
      })
      .catch((err) => console.error('Error fetching post data:', err))
    } else {
      // Fetch the user's posts using the id
      axios.get("http://3.17.148.157:8000/profiles/profile_posts/", {
        params: { user_id: userId },
      })
      .then((response) => {
        setPostFeed(response.data)
      })
      .catch(err => console.error("Error fetching post data for user:", err));
    }
    
  }, [])

  return (
      <div className="feed-container">
          {postFeed.map(post => (
              <MiniPost
                  post_id={post.post_id}
                  username={post.username}
                  title={post.title}
                  description={post.description}
                  date={post.creation_date}
              ></MiniPost>
          )).reverse()}
      </div> 
  )
}

export default PostFeed