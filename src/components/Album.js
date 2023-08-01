import React from 'react';

export const Album = ({album}) => {
    return (
        <li className='list-group-flush'>
            {
                album.title
            }
        </li>
    );
}

