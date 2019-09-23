import React from 'react';
import Image from 'react-bootstrap/Image';

const MainSection = () => {
    return (
        <div>
            <Image src={require('../images/main_image.jpg')} alt='Landscape' className='MainImage' />
        </div>
    );
}

export default MainSection;