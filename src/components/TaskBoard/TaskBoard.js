function TaskBoard(props) {
    return (
        <div className='TaskBoard'>
            <div className='Header'>
                <div className='icon'></div>
                <div className='label'>Nombre de lista</div>
            </div>

            <div className='Body'>
                <div className='Task'>
                    <input type='checkbox' className='IsDone' />
                    <div className='Info'>
                        <div className='Title'>Titulo del Task</div>
                        <div className='Extra'></div>
                    </div>
                    <input className='IsStarred' type='checkbox' />
                </div>

                <div className='Task'>
                    <input type='checkbox' className='IsDone' />
                    <div className='Info'>
                        <div className='Title'>Titulo del Task</div>
                        <div className='Extra'></div>
                    </div>
                    <input className='IsStarred' type='checkbox' />
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

export default TaskBoard;