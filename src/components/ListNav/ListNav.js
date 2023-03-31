import { useContext } from 'react';
import { DataContext } from "../../DataContext";

import ListButton from "./ListButton/ListButton";
import NewItem from '../NewItem/NewItem';


function ListNav() {
    const { data, setData } = useContext(DataContext);
    let listNames = data.map(item => item.listName);

    function addNewList (listName) {
        setData(prev => 
            [...prev, {
                listName, 
                taskList: []
            }]
        )
    }

    return (
        <div className='ListNav'>
            <div className='Body'>
                {listNames.map((listName, i) =>
                    <ListButton label={listName} key={i} />
                )}
            </div>

            <div className='Footer'>
                <NewItem onAdd={addNewList} />
            </div>
        </div>
    );
}

export default ListNav;