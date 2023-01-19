import React, {useState} from 'react';

import DeleteIcon from '../assets/icon.svg';
import ArrowIcon from '../assets/arrow.svg';

import styles from '../styles/Dropdown.module.scss';
import DropdownItem from './DropdownItem';

interface ILanguage {
    id: number,
    title: string
}

interface ISelectors {
    id: number,
    title: string,
    path: string
}

const Dropdown: React.FC = () => {
    
    const [value, setValue] = useState('');
    const [isOpen, setOpen] = useState(true);
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [selectors, setSelectors] = useState<ISelectors[]>([
        {id: 1, title: 'Русский', path:'icon1.png'},
        {id: 2, title: 'Английский', path:'icon2.png'},
        {id: 3, title: 'Испанский', path:'icon3.png'},
        {id: 4, title: 'Немецкий', path:'icon4.png'},
        {id: 5, title: 'Итальянский', path:'icon5.png'},
        {id: 6, title: 'Польский', path:'icon6.png'},
    ]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onDelete = (id: number) => {
        const newList = languages.filter(item => item.id !== id);
        setLanguages(newList)
    }

    const filteredList = selectors.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

    return(
        <div className={styles.container}>
            <p>Язык</p>
            <div className={styles.container__input}>
                <ul>
                    {languages.map(item => (
                        <li key={item.id}>
                            {item.title}
                            <img 
                                src={DeleteIcon} 
                                alt='delete icon'
                                onClick={() => onDelete(item.id)}
                                />
                        </li>
                    ))}
                </ul>
                <img 
                    className={styles.arrow} 
                    src={ArrowIcon} 
                    style={isOpen ? {transform:'rotateY(180deg)'} : {transform: 'rotateX(180deg)'}}
                    alt='dropdown arrow'
                    onClick={() => setOpen(!isOpen)}
                    />    

                <div className={styles.dropdown} style={isOpen ? {visibility: 'visible'} : {visibility:'hidden'}}>
                    <input
                        type='text'
                        value={value}
                        onChange={onChange}
                        placeholder='Поиск'
                        />
                    <ul>
                        {
                            filteredList.map(item => (
                                <DropdownItem {...item} key={item.id} languages={languages} setLanguages={setLanguages}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;