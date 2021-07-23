import { useState } from "react";

import Button from "./Button";
import AccordionMenu from "./AccordionMenu";
import Notification from "./Notification";

const BrandButton = ({ className, brandIcon, notification }) => {

        /* when a brand is selected, open the accordion menu and highlight the brand icon */
        const [selected, setSelected] = useState(false)
   
        const onClick = (e) => {
            const posts = document.getElementById("posts"); /* to slide the posts right */
    
            /* brand selected, open menu */
            if (!selected && document.querySelectorAll(".selectedBtn").length == 0) {
                e.currentTarget.className = "brandBarItem selectedBtn";
                setSelected(!selected)

                /* slide the posts (if not mobile) */
                if (window.innerWidth > 450) {
                    posts.style.marginLeft = "320px";
                    posts.style.transition = "margin 0.5s";
                }
            }
    
            /* brand unselected, close menu */
            else if (selected && e.currentTarget.className === "brandBarItem selectedBtn") {
                e.currentTarget.className = "brandBarItem";
                setSelected(!selected)
    
                if (window.innerWidth > 450) {
                    posts.style.marginLeft = "75px";
                    posts.style.transition = "margin 0.5s";
                }

                /* mobile */
                else {
                    posts.style.marginLeft = "5%";
                    posts.style.transition = "margin 0.5s";
                }
            }
        }

    /* 
    * display accordion menu if button selected
    * display notification if there are any
    * hide the notification on brand icon when menu is open
    */
   
    return (
        <div>
            { selected ? <AccordionMenu notification={notification} /> : "" }
            { notification !== "0" ? <div className="withNotification">
                <Button className={className} text={brandIcon} onClick={onClick}/>
                { !selected ? <Notification n={notification} brand={true} /> : "" } </div> :
            <Button className={className} text={brandIcon} onClick={onClick}/>}
        </div>
    )
}

export default BrandButton