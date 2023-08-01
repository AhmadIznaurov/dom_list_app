import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums} from "../redux/action";
import {useParams} from "react-router-dom";
import {Album} from "./Album";


export const Albums = (props) => {
    const albums = useSelector((state) => state.albums.albums);
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(() => {
        dispatch(loadAlbums(id))
    }, [id])


    return (
        <ol className='list-group'>
            {
                albums.map((album) => {
                    return <Album key={album.id} album={album} />
                })
            }
        </ol>
    );
}

