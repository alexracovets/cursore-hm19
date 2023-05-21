import React, {useEffect, useState} from 'react';
import './Gallery.css'
import {Link} from "react-router-dom";

const Gallery = () => {
    const [photos, setPhotos]=useState([]);

    const getPhotos = async()=>{
        const request = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const response = await request.json();

        setPhotos(response);
    }

    useEffect(()=>{
        getPhotos();
    }, []);

    return (
        <div className="gallery">
            {photos.map((photo)=>{
                return(
                <Link className="photo" key={photo.id}  to={`/photos/${photo.id}`}>
                    <img src={photo.url} alt={photo.title} />
                </Link>
                );
            })}
        </div>
    );
};

export default Gallery;