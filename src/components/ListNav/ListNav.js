import { useContext } from 'react';
import { DataContext } from "../../DataContext";

import ListButton from "./ListButton/ListButton";
import NewItem from '../NewItem/NewItem';
import ToggleButton from './ToggleButton/ToggleButton';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

// ListNav definition
function ListNav({ isListNavOpen, setIsListNavOpen }) {
    const { lists, setLists } = useContext(DataContext);

    function addNewList(newListName) {
        setLists(prev => [...prev, newListName])
    }



    return (
        <div className={`ListNav ${isListNavOpen ? '' : 'closed'}`}>
            <div className='container'>
                <div className='Header' >
                    <ToggleButton
                        icon={faXmark}
                        onClick={() => { setIsListNavOpen(prev => !prev) }}
                    />
                </div>
                <div className='Body'>
                    {lists.map((listName, i) =>
                        <ListButton label={listName} key={i} />
                    )}
                </div>

                <div className='Footer'>
                    <NewItem onAdd={addNewList} placeholder={'Agregar Lista'} />
                </div>
            </div>
            <div className="fog"
                onClick={() => { setIsListNavOpen(prev => !prev) }}
            />
        </div>
    );
}

export default ListNav;