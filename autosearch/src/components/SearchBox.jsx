import React, { useState, useEffect } from 'react';
import countries from '../resources/countryData.json';

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (searchValue === '') {
            setDropdown(false);
            setData([]);
        } else {
            const filteredData = countries.filter((elem) => elem.name.toUpperCase().startsWith(searchValue));
            setData(filteredData);
            setDropdown(true);
        }
    }, [searchValue]);

    return (
        <div>
            <h1>Search for a Country</h1>
            <div className='searchbox'>
                <input
                    type="text"
                    onChange={(e)=>{setSearchValue(e.target.value.toUpperCase())}}
                    onKeyDown={(e) => {
                        e.key === 'Escape' ? setDropdown(false) : setDropdown(true);
                    }}
                />
                <button onClick={() => setDropdown(!dropdown)}>Search</button>
            </div>
            <div style={{ display: dropdown ? 'block' : 'none' }}>
                {data.map((elem) => (
                    <div key={elem.code}>{elem.name}</div>
                ))}
            </div>
        </div>
    );
};

export default SearchBox;
