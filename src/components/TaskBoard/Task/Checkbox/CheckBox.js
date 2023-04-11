import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as done, faStar as starred } from "@fortawesome/free-solid-svg-icons";
import { faCircle as unDone, faStar as unStarred } from '@fortawesome/free-regular-svg-icons';


function CheckBox({ isChecked, onChange, name }) {
    const layout = [
        { name: 'isDone', icons: [done, unDone] },
        { name: 'isStarred', icons: [starred, unStarred] }
    ]
    const [checkedIcon, uncheckedIcon] = layout.find(item => item.name === name).icons

    return (
        <FontAwesomeIcon className="CheckBox"
            icon={isChecked ? checkedIcon : uncheckedIcon}
            onClick={() => {
                onChange(name);
            }} />
    );
}

export default CheckBox;