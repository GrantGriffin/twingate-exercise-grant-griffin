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
                console.log(result)
                const output = await result.json()
                setDataOutput(output)
            }
        } catch (error) {
            console.log('FETCH FAILED')
        }
    }
// add refetch -- intentionally left deps empty for mount behavior
    useEffect( () => {
        fetchData()
    }, [])

    return (
        <div>
            <div>Data</div>
            <div>{dataOutput}</div>
            <button onClick={fetchData}>refetch</button>
        </div>

    )
}

export default DataSection;