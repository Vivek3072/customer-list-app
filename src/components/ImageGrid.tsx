import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
    photos: string[];
    category: string;
}

const ImageGrid: React.FC<Props> = ({ photos, category }) => {
    const [currentPhotos, setCurrentPhotos] = useState<string[]>(photos);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/random?count=9&query=${category}`, {
                    headers: {
                        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
                    },
                });
                const newPhotos = response?.data?.map((photo: any) => photo.urls.small);
                setCurrentPhotos(newPhotos);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
        const intervalId = setInterval(fetchPhotos, 10000);

        return () => clearInterval(intervalId);
    }, [category]);

    return (
        <div className="image-grid">
            {currentPhotos.map((photo, index) => (
                <img key={index} src={photo} alt="customer" />
            ))}
        </div>
    );
};

export default ImageGrid;
