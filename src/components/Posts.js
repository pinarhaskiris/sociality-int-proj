import Post from "./Post";

import confetti from "../img/confetti.png"
import dog from "../img/dog.png"
import icecream from "../img/icecream.png"

const Posts = () => {

    return (
        <div id="posts">
            <div className="postGroup">
                <h3 className="dateCategory">14 January 2016</h3>
                <div className="postSection">
                    <Post platform="facebook" status="scheduled" date="14 January 2016 - 14:30"
                    text="Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusmod."
                    img={confetti} likes="0" comments="0" shares="0" views="0" />

                    <Post platform="twitter" status="need approval" date="14 January 2016 - 14:30"
                    text="Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusmod."
                    img={icecream} likes="0" comments="0" shares="0" views="0" />
                </div>
            </div>

            <div className="postGroup">
                <h3 className="dateCategory">12 January 2016</h3>
                <div className="postSection">
                    <Post platform="facebook" status="scheduled" date="12 January 2016 - 14:30"
                    text={["Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusimod tempor incididunt? ", <a href="http://bit.ly/145HD7S">http://bit.ly/145HD7S</a>]} 
                    img={dog} likes="124" comments="63" shares="4" views="1426" />

                    <Post platform="twitter" status="need approval" date="12 January 2016 - 14:30"
                    text={["Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusimod tempor incididunt? ", <a href="http://bit.ly/145HD7S">http://bit.ly/145HD7S</a>]} 
                    img={dog} likes="124" comments="63" shares="4" views="1426" />

                    <Post platform="instagram" status="need approval" date="12 January 2016 - 14:30"
                    text={["Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusimod tempor incididunt? ", <a href="http://bit.ly/145HD7S">http://bit.ly/145HD7S</a>]} 
                    img={dog} likes="124" comments="63" shares="4" views="1426" />
                </div>
            </div>
            
            <div className="postGroup">
                <h3 className="dateCategory">10 January 2016</h3>
                <div className="postSection">
                    <Post platform="facebook" status="scheduled" date="12 January 2016 - 14:30"
                    text="Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusmod.
                    Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed do eiusmod."
                    img={confetti} likes="12" comments="6" shares="0" views="98" />
                </div>
            </div>
            
        </div>
    )
}

export default Posts
