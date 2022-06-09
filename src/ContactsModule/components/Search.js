import { useEffect, useState } from "react";
import '../styles/Search.css';

export function Search ( {placeholder, onSearching} ) {
    const [ searchValue, setSearchValue] = useState(''); 
    useEffect (() => {
        onSearching(searchValue);
    }, [searchValue]);
    return (
        <input
            className="search-area"
            type='text'
            onChange={({target}) => setSearchValue(target.value)}
            placeholder={placeholder ? placeholder : 'Search '}
        ></input>
    );
}

