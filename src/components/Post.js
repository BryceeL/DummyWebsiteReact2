import { useNavigate } from 'react-router-dom';

import "./Post.css"

function Post(props) {
    const {is_mini, post_id, username, media, title, description} = props
    const navigate = useNavigate();
    //Mini Post is a button
    if (is_mini) {
        
        var charLimit = 80;
        
        //shorten description if it exceeds char limit
        function shortDescription(descriptionText) {
            let newDescriptionText = descriptionText
            if (descriptionText.length > charLimit) {
                newDescriptionText = descriptionText.substring(0, charLimit) + "..."
            }
            return newDescriptionText
        }

        function navigateToPost() {
            navigate("/post/"+post_id);
        }

        return (
            <button onClick={navigateToPost} className="mini post" id={post_id}>
                <h2>{title}</h2>
                <p>Posted by: {username}</p>
                <p>{shortDescription(description)}</p>
            </button>
        )
    //Normal post is div container
    } else {
        return (
            <div>
                <div className="normal post" id={post_id}>
                    <h2>{title}</h2>
                    <p>Posted by: {username}</p>
                    <p>{description}</p>
                </div>
            </div>
            
        )
    }
    
}

export default Post