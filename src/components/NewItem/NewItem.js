import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function NewItem({ onAdd, placeholder = 'Nuevo' }) {
    const [inputText, setInputText] = useState('');


    function handleOnAdd() {
        const trimmedInput = inputText.trim();
        if (trimmedInput) {
            onAdd(inputText);
        }
        setInputText('');
    }

    return (
        <div className='NewItem'>
            <FontAwesomeIcon icon={faPlus} className='button-icon button'
                onClick={() => {
                    handleOnAdd();
                }}
            />
            <input
                placeholder={placeholder}
                value={inputText}
                type='text'
                onChange={e => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                        handleOnAdd();
                    }
                }}
            />
        </div>
    );
}

export default NewItem;