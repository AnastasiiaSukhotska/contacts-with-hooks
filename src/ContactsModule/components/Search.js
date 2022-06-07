import { useEffect, useState } from "react";
import '../styles/Search.css';

export function Search ( {placeholder, onSearching} ) {

    const [ searchValue, setSearchValue] = useState('');
    const onSearchChange = (value, event) => {
        setSearchValue(value);
        console.log(value, searchValue);   
    }

    useEffect (() => {
        onSearching(searchValue);
    }, [searchValue]);


    return (
        <input
            className="search-area"
            type='text'
            onChange={({target}, event) => onSearchChange(target.value, event)}
            placeholder={placeholder ? placeholder : 'Search '}
        ></input>
    );
}