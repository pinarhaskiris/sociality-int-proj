import { FaFacebookF, FaTwitter, FaInstagram, FaQuestion,
FaTrashAlt, FaEdit, FaEllipsisH,
FaRegThumbsUp, FaCommentAlt, FaShare, FaRegEye } from "react-icons/fa"

const Post = ({ platform, date, text, img, status,
likes, comments, shares, views }) => {

    /* determining the color of the sidebar and the platform icon */
    let platformIcon, platformClass;

    if (platform === "facebook") {
        platformIcon = <FaFacebookF />
        platformClass = "postSideBar facebook"
    }
    else if (platform === "twitter") {
        platformIcon = <FaTwitter />
        platformClass = "postSideBar twitter"
    }
    else if (platform === "instagram") {
        platformIcon = <FaInstagram />
        platformClass = "postSideBar instagram"
    }
    else { /* unknown platform */
        platformIcon = <FaQuestion />
        platformClass = "postSideBar unknown"
    }

    /* determining the status tag and tag color */
    let statusClass;
    
    if (status === "scheduled") {
        statusClass = "statusTag scheduled"
    }
    else if (status === "published") {
        statusClass = "statusTag published"
    }
    else if (status === "error") {
        statusClass = "statusTag error"
    }
    else if (status === "notes") {
        statusClass = "statusTag notes"
    }
    else if (status === "need approval") {
        statusClass = "statusTag needAp"
    }
    else { /* unknown status */
        statusClass = "statusTag unknown"
    }

    return (
        <div className="post">
            <div className={platformClass}>
                {platformIcon}
            </div>
            
            <div className="postContent">
                <div className="postAcNDat">
                    <div className="postDate">{date}</div>
                    <div className="postActions">
                        <span className="postAction"><FaTrashAlt /></span>
                        <span className="postAction"><FaEdit /></span>
                        <span className="postAction"><FaEllipsisH /></span>
                    </div>
                </div>
                
                <div className="postText">{text}</div>

                <img className="postMedia" src={img}/>

                <div className="postStatNTag">
                    <div className="postStats">
                        <span className="postStat"><FaRegThumbsUp /> {likes}</span>
                        <span className="postStat"><FaCommentAlt /> {comments}</span>
                        <span className="postStat"><FaShare /> {shares}</span>
                        <span className="postStat"><FaRegEye /> {views}</span>
                    </div>
                    <span className={statusClass}>{status}</span>
                </div>

            </div>
        </div>
    )
}

export default Post
