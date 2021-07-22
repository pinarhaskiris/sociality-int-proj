import socialityLogo from '../img/sociality_logo.png'
import pp from '../img/pp.png'

/* 
* topBarLeftPart: sociality logo and status info
* topBarRightPart: user profile photo
*/

const TopBar = () => {
    return (
        <div id="topBar">
            <div className="topBarLeftPart">
                <img id="socialityLogo" src={ socialityLogo } alt="sociality_logo"/>
                <div id="statusInfo">
                    <div className="statusInfoItem"><span className="dot published"></span>Published</div>
                    <div className="statusInfoItem"><span className="dot error"></span>Error</div>
                    <div className="statusInfoItem"><span className="dot needAp"></span>Need Approval</div>
                    <div className="statusInfoItem"><span className="dot scheduled"></span>Scheduled</div>
                    <div className="statusInfoItem"><span className="dot notes"></span>Notes</div>
                </div>
            </div>
            <img className="topBarRightPart" src={pp}/>

        </div>
    )
}

export default TopBar
