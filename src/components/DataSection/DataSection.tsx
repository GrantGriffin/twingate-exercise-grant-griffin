import React, { useEffect, useState } from 'react';
import { Data } from '../../App';

interface Props {
    data: Data
}

const DataSection = ({data}: Props) => {

    const [dataOutput, setDataOutput] = useState<string>('')

    const fetchData = async () => {
        try {
            
            if(data?.url) {
                const result = await fetch(data.url)
                const output = await result.json()
                
                const stringOutput = JSON.stringify(output);
                setDataOutput(stringOutput)
            }
        } catch (error) {
            alert('FETCH FAILED')
        }
    }
    // attempt a fetch when data changes
    useEffect( () => {
        fetchData()
    }, [data])

    return (
        <div style={{margin: '8px', padding: '4px'}}>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{fontWeight: 'bold'}}>Data</div>
                <button style={{height: '50%', margin: '0'}} onClick={fetchData}>refetch</button>
            </div>
            <hr />
            <div style={{height: '200px', overflow: 'auto', border: "1px solid black", borderRadius: '5px', padding: '8px'}}>{dataOutput}</div>
            
        </div>

    )
}

export default DataSection;