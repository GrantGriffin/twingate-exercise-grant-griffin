import React from 'react';
import { ImageText } from '../../App';

interface Props {
    imageText: ImageText[]
}

const ImageTextSection = ({ imageText }: Props) => {

    const imageList = (): JSX.Element[] => {
        return imageText.map((imageTextItem: ImageText) => {
            if (imageTextItem.leftToRight) {
                return (
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '4px', border: '1px solid black', borderRadius: '5px' }}>
                        <img height={64} src={imageTextItem.imageURI} alt={imageTextItem.title} />
                        <div style={{ width: '100%', padding: '8px', textAlign: 'right' }}>
                            <div style={{ fontWeight: 'bold' }}>{imageTextItem.title}</div>
                            <div>{imageTextItem.text}</div>
                        </div>
                    </div>
                )
            }
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '4px', border: '1px solid black', borderRadius: '5px' }}>
                    <div style={{ width: '100%', padding: '8px' }}>
                        <div style={{ fontWeight: 'bold' }}>{imageTextItem.title}</div>
                        <div>{imageTextItem.text}</div>
                    </div>
                    <img height={64} src={imageTextItem.imageURI} alt={imageTextItem.title} />
                </div>
            )
        })
    }

    return (
        <div style={{ maxHeight: '300px', overflow: 'auto', margin: '8px', padding: '4px' }}>
            {!imageText.length ? (
                <div>no images to display</div>
            ) : imageList()
            }
        </div>
    )

}

export default ImageTextSection;