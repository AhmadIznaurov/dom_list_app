import React from 'react';
import {NavLink, useParams} from "react-router-dom";

export const User = ({user}) =>  {

    const id = parseInt(useParams().id)
    console.log(id)

    return (
            <li className='list-group-item'>
                <NavLink to={`/${user.id}`} className={user.id === id ? 'list-group-item' : ''}>
                {
                    user.name
                }
                </NavLink>
            </li>
    );
}

