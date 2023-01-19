import React, {useState, Dispatch, SetStateAction} from 'react';

import UncheckedIcon from '../assets/unchecked.png';
import CheckedIcon from '../assets/checked.png';

interface ILanguage {
    id: number,
    title: string
}

interface DropdownItemProps {
    id: number,
    title: string,
    path: string,
    languages: ILanguage[],
    setLanguages: Dispatch<SetStateAction<ILanguage[]>>
}

const DropdownItem:React.FC<DropdownItemProps> = ({id, title, path, languages, setLanguages}) => {
    
    const [selected, setSelected] = useState(false);

    const selectItem = () => {
        const selectedItem = {
            id,
            title
        }
        setSelected(!selected);
        if(!selected){
            setLanguages([...languages, selectedItem]);
        }else{
            const newList = languages.filter(item => item.id !== id);
            setLanguages(newList);
        }
    }

    const langId = languages.map(item => item.id);
    const equals = langId.filter(item => item.toString().includes(id.toString()))

    return(
        <li>
            <span>
                <img src={require('../assets/' + path)} alt='flag'/>
                {title}
            </span>
            <img 
                src={equals[0] === id ? CheckedIcon : UncheckedIcon} 
                alt='icon'
                onClick={selectItem}
                />
        </li>
    )
} 

export default DropdownItem;