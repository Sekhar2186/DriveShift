import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/bike.jpg';
import Image2 from '../../assets/extra.jpg';
import Image3 from '../../assets/peakpx.jpg';
import Image4 from '../../assets/rr.jpeg';
import Image5 from '../../assets/new.jpg';

function Upper() {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="image-carousel">
            <img className="carousel-image" src={images[currentImageIndex]} alt="Scrolling" />
        </div>
    );
}

export default Upper;
