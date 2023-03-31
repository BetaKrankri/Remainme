import { useContext } from "react";
import { DataContext } from "../../../DataContext";

function ListButton({ label }) {
    const { setCurrentList } = useContext(DataContext);

    return (
        <div
            className='ListButton'
            onClick={() => {
                setCurrentList(label)
            }}>
            <div className='icon'></div>
            <div className='label'>{label}</div>
        </div>
    );
}

export default ListButton;