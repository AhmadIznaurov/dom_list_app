import React from 'react';
import {Link, useParams} from "react-router-dom";

export const User = ({user}) =>  {

    const {id} = useParams()
    console.log(id)

    return (
            <li className='list-group-item'>
                <Link to={`/${user.id}`}>
                {
                    user.name
                }
                </Link>
            </li>
    );
}

