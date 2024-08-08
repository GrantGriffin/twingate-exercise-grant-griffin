**How to run this app**
`npm run start` from the command line

**How to use this app**
Paste valid JSON matching the object structure to see it generate elements

**Schema**
This should take an array of objects fitting the type here:
```
export type HeroImage = {
  type: 'hero';
  imageURI: string;
}

export type ImageText = {
  type: 'image-text';
  imageURI: string;
  text: string;
  title: string;
  leftToRight: boolean;
}

export type Data = {
  type: 'data';
  url: string;
}
```

Example JSON input: 
```
[
    {
        "type": "hero",
        "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
    },
    {
        "type": "image-text",
        "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
        "text": "Sunset from the sky......",
        "title": "Airplane",
        "leftToRight": false
    },
    {
        "type": "image-text",
        "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
        "text": "Sunset from the sky......",
        "title": "Airplane",
        "leftToRight": true
    },
    {
        "type": "data",
        "url": "https://api.apis.guru/v2/list.json"
    }
]
```
