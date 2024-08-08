import React from 'react';

const Editor = ({handleJSON}: {handleJSON: (e: any) => void}) => {

    return (
        <div style={{width: '100%'}}>
            <textarea style={{width: '100%'}} rows={50} onChange={handleJSON}></textarea>
        </div>
    )
}

export default Editor;