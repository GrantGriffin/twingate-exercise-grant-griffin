import React, { useState } from 'react';

import Editor from './components/Editor/Editor';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

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

export type JSONState = {
  heroImage: HeroImage | null;
  imageText: ImageText[];
  data: Data | null;
}

type InputObjectType = HeroImage | ImageText | Data;


function App() {

  const initialState: JSONState = {
    heroImage: null,
    imageText: [],
    data: null
  }
  const [state, setState] = useState<JSONState>(initialState)


  /**
   *  attempts to parse JSON data and displays an alert in case of failure
   * @param e text change event
   * @returns {void} sets state based on JSONState type
   */
  const handleJSON = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
    try {
      const inputData = JSON.parse(e.target.value)
      // handle validation and set state or display error message.
      if (!inputData.length) {
        throw new Error("error in json data: not array type or is empty")
      }
      const outputData: JSONState = { ...initialState }

      // iterate over json array
      inputData.forEach((obj: InputObjectType) => {
        // allow only one hero object
        if (obj.type === 'hero' && outputData.heroImage === null) {
          outputData.heroImage = obj
        }
        // allow multiple image text objects
        else if (obj.type === 'image-text') {
          outputData.imageText.push(obj)
        }
        // allow only one data object
        else if (obj.type === 'data' && outputData.data === null) {
          outputData.data = obj
        }
        else {
          // throw on objects that don't fit expected model
          throw new Error("Error parsing JSON.  Must contain only one hero type object, and only one data type object.  Accepted objects: hero, image-text, and data")
        }
      })
      setState({...outputData})

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px', padding: '4px' }}>
      <div style={{maxWidth: '50%'}}>
        <Editor handleJSON={handleJSON} />
      </div>
      <div style={{maxWidth: '50%'}}>
        <LandingPage objectState={state} />
      </div>
    </div>
  )
}

export default App;
