import BrandButton from './BrandButton';
import { FaApple, FaDropbox, FaPlaystation, FaLinux, FaWindows, FaRedditAlien } from 'react-icons/fa';

const BrandBar = () => {
    return (
        <div id="brandBar">
            <BrandButton className="brandBarItem" brandIcon={<FaApple />} notification="0" />
            <BrandButton className="brandBarItem" brandIcon={<FaDropbox />} notification="99" />
            <BrandButton className="brandBarItem" brandIcon={<FaPlaystation />} notification="0" />
            <BrandButton className="brandBarItem" brandIcon={<FaLinux />} notification="29" />
            <BrandButton className="brandBarItem" brandIcon={<FaWindows />} notification="0" />
            <BrandButton className="brandBarItem" brandIcon={<FaRedditAlien />} notification="0" /> 
        </div>
    )
}

export default BrandBar