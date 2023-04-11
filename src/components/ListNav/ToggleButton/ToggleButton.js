import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


function Button({ icon = faQuestion, onClick }) {
    return (
        <div className='ToggleButton'>
            <FontAwesomeIcon icon={icon} onClick={onClick} />
        </div>
    );
}

export default Button;