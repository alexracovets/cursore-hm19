import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './PhotoDetail.css';
import ArrowBack from './img/arrow-back.png'

const PhotoDetail = () => {
    const { photoId } = useParams();
    const [photoDetail, setPhotoDetail] = useState('');
    const navigate = useNavigate();

    const goBack = ()=>{
         navigate(-1);
    }

    useEffect(() => {
        const getPhotoDetail = async () => {
            const request = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            const photos = await request.json();
            const currentPhoto = photos.find(photo => photo.id === Number(photoId));
            setPhotoDetail(currentPhoto);
        }

        getPhotoDetail();
    }, [photoId]);

    return (
        <div className="photo-wrapper">
            <div className="back" onClick={goBack}>
                <img src={ArrowBack} alt=""/>
            </div>
            <img src={photoDetail.url} alt={photoDetail.title}/>
        </div>
    );
};

export default PhotoDetail;
