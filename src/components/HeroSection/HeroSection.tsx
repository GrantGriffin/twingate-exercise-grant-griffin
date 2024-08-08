import React, { ReactElement } from 'react';
import { HeroImage } from '../../App';

interface Props {
    heroImage: HeroImage;
}

const HeroSection= ({heroImage}: Props): ReactElement => {

    if(!heroImage?.imageURI) {
        return <div>no hero image to display</div>
    }

    return (
        <div>
            <img style={{width: '100%', objectFit: 'cover'}} height={150} src={heroImage?.imageURI || ""} alt="some hero" />
        </div>
    )
}

export default HeroSection;