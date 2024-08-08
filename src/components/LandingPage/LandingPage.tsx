import React, { ReactElement } from 'react';
import type { JSONState } from '../../App';
import HeroSection from '../HeroSection/HeroSection';
import ImageTextSection from '../ImageTextSection/ImageTextSection';
import DataSection from '../DataSection/DataSection';


interface Props {
    objectState: JSONState;
}

const LandingPage = ({objectState}: Props): ReactElement => {
    console.log('OBJECT STATE', objectState)
    return (
        <div>
            <HeroSection heroImage={objectState?.heroImage || null} />
            <ImageTextSection imageText={objectState.imageText} />
            <DataSection data={objectState?.data || null} />
        </div>
    )
}

export default LandingPage;