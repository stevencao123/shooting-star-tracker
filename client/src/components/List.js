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
        <div className='list-container'>
            <ul className='list'>
                {locations.map(row => (<li className='list-item' key={row.id}>{row.world}, {row.loc}, {moment(row.min).format('YYYY/MM/DD HH:mm')}, {moment(row.max).format('YYYY/MM/DD HH:mm')}, {row.founder}</li>))} 
            </ul>
        </div>
    )
}

export default List