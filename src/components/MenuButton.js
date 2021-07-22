import { useState } from 'react';
import { FaMinus } from 'react-icons/fa';

/* used for the buttons in accordion menu */
const MenuButton = ({ iconStart, text, iconEnd }) => {

    /* to show or hide the sub-menus (dropdown) */
    const [selected, setSelected] = useState(false)
    const onSelected = () => {setSelected(!selected)}

    /* arrowDown: little triangle at the bottom of the selected menu item */
    return (
        <button className={selected ? "menuItem selectedMenuItem" : "menuItem"} onClick={onSelected}>
            <div className={selected ? "buttonContent selectedMenuBtn" : "buttonContent"}>
                <div className="buttonContentP1">
                    <div className="iconStart">{iconStart}</div>
                    <div className="buttonText">{text}</div>
                </div>
                <div className="buttonContentP2">{selected ? <FaMinus /> : iconEnd}</div>
            </div>
            { selected ? <div className="arrowDown"></div> : null }
            { selected ? <Dropdown /> : null }
        </button>  
    )
}

const Dropdown = () => {
    return (
        <ul>
            <li className="subMenuBtn"> Compose </li>
            <li className="subMenuBtn"> Feed </li>
        </ul>
    )
}

export default MenuButton
