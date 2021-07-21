import { FaRegBell, FaFileAlt, FaEdit, FaComments, FaHeadphones, FaChartLine, FaPlus} from 'react-icons/fa';
import MenuButton from './MenuButton';
import Notification from './Notification';

const AccordionMenu = ({ notification }) => {
    return (
        <div class="accordionMenu">
            <div className="withNotification">
                <MenuButton iconStart={<FaRegBell />} text={"NOTIFICATIONS"}
                
                /* if there are notifications, show them. if there aren't any, just put a plus sign */
                iconEnd={notification !== "0" ? <Notification n={notification} brand={false} /> : <FaPlus />}/>
            </div>
            <MenuButton iconStart={<FaFileAlt />} text={"SUMMARY"} iconEnd={<FaPlus />}/>
            <MenuButton iconStart={<FaEdit />} text={"PUBLISH"} iconEnd={<FaPlus />}/>
            <MenuButton iconStart={<FaComments />} text={"ENGAGE"} iconEnd={<FaPlus />}/>
            <MenuButton iconStart={<FaHeadphones />} text={"LISTEN"} iconEnd={<FaPlus />}/>
            <MenuButton iconStart={<FaChartLine />} text={"REPORT"} iconEnd={<FaPlus />}/>
        </div>
    )
}

export default AccordionMenu