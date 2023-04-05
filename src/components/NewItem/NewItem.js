import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function NewItem({ onAdd }) {
    const [inputText, setInputText] = useState('');

    return (
        <div className='NewItem'>
            <FontAwesomeIcon icon={faPlus} className='button-icon button'
                onClick={() => {
                    // TODO: Verificar que no se encuentra ya el nombre en la lista.
                    const trimmedInput = inputText.trim();
                    if (trimmedInput) {
                        onAdd(inputText);
                    }
                    setInputText('');
                }}
            />
            < input
                value={inputText}
                className=''
                type='text'
                onChange={e => setInputText(e.target.value)}
            />
        </div>
    );
}

export default NewItem;