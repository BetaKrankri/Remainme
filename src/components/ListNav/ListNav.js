import ListButton from "./ListButton/ListButton";
import NewItem from '../NewItem/NewItem';


function ListNav({ listNames }) {


    return (
        <div className='ListNav'>
            <div className='Body'>
                {listNames.map((listName, i) =>
                    <ListButton label={listName} key={i} />

                )}

            </div>

            <div className='Footer'>
                <NewItem onAdd={() => {}} />
            </div>
        </div>
    );
}

export default ListNav;