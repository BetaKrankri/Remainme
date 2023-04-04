import { useContext } from 'react';
import { DataContext } from "../../DataContext";

import ListButton from "./ListButton/ListButton";
import NewItem from '../NewItem/NewItem';


function ListNav() {
    const { lists, setLists } = useContext(DataContext);

    function addNewList(newListName) {
        setLists(prev => [...prev, newListName])
    }

    return (
        <div className='ListNav'>
            <div className='Body'>
                {lists.map((listName, i) =>
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