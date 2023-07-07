
import React from 'react';
const AddToFavourites = () => {

    const {movie} = props;
    return ( 
        <div className="add-to-favourites">
            <span>Add to Favourites</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"

            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
            </svg>
        </div>
        


     );
}
 
export default AddToFavourites;