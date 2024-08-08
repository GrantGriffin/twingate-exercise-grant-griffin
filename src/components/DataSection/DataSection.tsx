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
                console.log('RES', result)
                const output = await result.json()
                console.log('JSON?', output)
                
                const stringOutput = JSON.stringify(output);
                setDataOutput(stringOutput)
            }
        } catch (error) {
            console.log('FETCH FAILED')
        }
    }
    // attempt a fetch when data changes
    useEffect( () => {
        fetchData()
    }, [data])

    return (
        <div style={{margin: '8px', padding: '4px'}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <h3>Data</h3>
            <button style={{height: '50%', margin: 'auto'}} onClick={fetchData}>refetch</button>
            </div>
            <div>{dataOutput}</div>
            
        </div>

    )
}

export default DataSection;