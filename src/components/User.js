import React from 'react';

export const User = ({user}) =>  {
    return (
        <li className='list-group-item'>
            {
            user.name
            }
        </li>
    );
}

// adding