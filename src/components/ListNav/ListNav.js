function ListNav(props) {
    return (
        <div className='ListNav'>
            <div className='Body'>
                <div className='ListButton'>
                    <div className='icon'></div>
                    <div className='label'>Nombre de lista</div>
                </div>
                <div className='ListButton'>
                    <div className='icon'></div>
                    <div className='label'>Nombre de lista</div>
                </div>
                <div className='ListButton'>
                    <div className='icon'></div>
                    <div className='label'>Nombre de lista</div>
                </div>
                <div className='ListButton'>
                    <div className='icon'></div>
                    <div className='label'>Nombre de lista</div>
                </div>

            </div>

            <div className='Footer'>
                <div className='NewTask'>
                    <div className='icon'></div>
                    <input className='' type='text' />
                </div>
            </div>
        </div>
    );
}

export default ListNav;