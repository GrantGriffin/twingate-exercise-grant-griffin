import React from 'react';
import { ImageText } from '../../App';

interface Props {
    imageText: ImageText[]
}

const ImageTextSection = ({imageText}: Props) => {
    console.log("image text", imageText)
    if(!imageText?.length) {
        return <div>no images to display</div>
    }
    return imageText.map((imageTextItem: ImageText) => {
        if (imageTextItem.leftToRight) {
            return (
                <div style={{display: 'flex'}}>
                    <img height={250} src={imageTextItem.imageURI} alt={imageTextItem.title} />
                    <div>
                        <h3>{imageTextItem.title}</h3>
                        <div>{imageTextItem.text}</div>
                    </div>
                </div>
            )
        }
        return (
            <div style={{display: 'flex', width: '100%'}}>
                <div style={{width: '100%'}}>
                    <h3>{imageTextItem.title}</h3>
                    <div>{imageTextItem.text}</div>
                </div>
                <img height={250} src={imageTextItem.imageURI} alt={imageTextItem.title} />
            </div>
        )
    })

}

export default ImageTextSection;