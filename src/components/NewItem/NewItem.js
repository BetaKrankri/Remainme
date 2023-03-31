import { useState } from 'react';


function NewItem({ onAdd }) {
    const [inputText, setInputText] = useState('');

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div className='NewItem'>
            <div
                className='icon'
                onClick={() => {}}>Add</div>
            <input
                value={inputText}
                className=''
                type='text'
                onChange={handleInputChange}
            />
        </div>
    );
}

export default NewItem;