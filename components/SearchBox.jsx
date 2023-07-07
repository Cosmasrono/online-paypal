

import React, { useState } from 'react';
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };
    return ( 
        <div className="search-box">
                 <input type="text" value={searchValue} onChange={handleInputChange} />

            
        </div>

     );
}
 
export default SearchBox;