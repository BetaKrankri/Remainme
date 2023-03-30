import ListButton from "./components/ListButton/ListButton";
import NewList from "./components/NewList/NewList";

function ListNav(props) {
    return (
        <div className='ListNav'>
            <div className='Body'>

                <ListButton />
                <ListButton />
                <ListButton />
                <ListButton />

            </div>

            <div className='Footer'>
                <NewList />
            </div>
        </div>
    );
}

export default ListNav;