import React from 'react';

export const Album = ({album}) => {
    return (
        <li className='list-group-item'>
                <span className='spanic-international'>
                   {
                    album.title

                   }
                    <img src="https://лаймтайм.рф/wp-content/uploads/2023/04/photo_5325930309885216054_y.jpg" alt="img"/>
                </span>
        </li>
    );
}

