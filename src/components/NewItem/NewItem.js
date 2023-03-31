import { useState } from 'react';


function NewItem({ onAdd }) {
    const [inputText, setInputText] = useState('');

    return (
        <div className='NewItem'>
            <div
                className='icon'
                onClick={() => {
                    // TODO: Verificar que no se encuentra ya el nombre en la lista.
                    const trimmedInput = inputText.trim();
                    if (trimmedInput) {
                        onAdd(inputText);
                    }
                    setInputText('');
                }}
            >Add</div>
            <input
                value={inputText}
                className=''
                type='text'
                onChange={e => setInputText(e.target.value)}
            />
        </div>
    );
}

export default NewItem;