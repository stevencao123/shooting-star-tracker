import React, {useState, useEffect} from 'react'
import moment from 'moment'
import './List.css'

function List() {

    const [locations, setLocations] = useState([{}])

    useEffect(() => {
        fetch("/getlocations").then(
            response => response.json()
        ).then(
            data => {
                setLocations(data)
            }
        )
    }, [])

    return (
        <div className='table-container'>
            
            <table className='table'>
                <tr>
                    <th>World</th>
                    <th>Location</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Founded By</th>
                </tr>
                {locations.map(row => (
                    <tr className='table-row' key={row.id}>
                        <td className='table-item'>{row.world}</td>
                        <td className='table-item'>{row.loc}</td>
                        <td className='table-item'>{moment(row.min).format('YYYY/MM/DD HH:mm')}</td>
                        <td className='table-item'>{moment(row.max).format('YYYY/MM/DD HH:mm')}</td>
                        <td className='table-item'>{row.founder}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default List