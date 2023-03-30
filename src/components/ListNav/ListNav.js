import ListButton from "./components/ListButton/ListButton";
import NewList from "./components/NewList/NewList";

function ListNav({ listNames }) {


    return (
        <div className='ListNav'>
            <div className='Body'>
                {listNames.map((listName, i) =>
                    <ListButton label={listName} key={i}/>

                )}

            </div>

            <div className='Footer'>
                <NewList />
            </div>
        </div>
    );
}

export default ListNav;