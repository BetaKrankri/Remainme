import { useContext } from "react";
import { DataContext } from "../../../DataContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faListUl } from '@fortawesome/free-solid-svg-icons';


function ListButton({ label }) {
    const { setCurrentList, currentList } = useContext(DataContext);

    const isSelected = currentList === label;

    return (
        <div
            className={`ListButton button ${isSelected ? 'selected' : ''}`}
            onClick={() => {
                setCurrentList(label)
            }}>
            <FontAwesomeIcon icon={faListUl} className="button-icon" />
            <div className='label'>{label}</div>
        </div>
    );
}

export default ListButton;