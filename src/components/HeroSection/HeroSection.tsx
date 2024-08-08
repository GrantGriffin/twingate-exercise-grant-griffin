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
        <div style={{margin: '12px', border: "1px solid black", borderRadius: '5px', height: '86px'}}>
            <img style={{width: '100%', objectFit: 'cover', margin: 0}} height={86} src={heroImage?.imageURI || ""} alt="some hero" />
        </div>
    )
}

export default HeroSection;