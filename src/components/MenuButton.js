import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from './Button';

/* used for the buttons in accordion menu */
const MenuButton = ({ iconStart, text, iconEnd }) => {

    /* to show or hide the sub-menus (dropdown) */
    const [selected, setSelected] = useState(false)
    const onSelected = () => {setSelected(!selected)}

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
        <div className="subMenu">
            <Button className="subMenuBtn" text="Compose"/>
            <Button className="subMenuBtn" text="Feed"/>
        </div>
    )
}

export default MenuButton
