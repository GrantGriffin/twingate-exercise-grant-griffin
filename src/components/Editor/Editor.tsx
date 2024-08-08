import React from 'react';

const Editor = ({handleJSON}: {handleJSON: (e: any) => void}) => {

    return (
        <div style={{width: '100%', margin: '8px 0 8px 0', padding: '4px'}}>
            <textarea  style={{width: '100%'}} rows={35} cols={50} onChange={handleJSON}></textarea>
        </div>
    )
}

export default Editor;