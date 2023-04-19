import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
            <TableContainer component={Paper} sx={{ width: '60vw'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>World</TableCell>
                        <TableCell align="center">Location</TableCell>
                        <TableCell align="center">Min</TableCell>
                        <TableCell align="center">Max</TableCell>
                        <TableCell align="center">Found By</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {locations.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.world}
                        </TableCell>
                        <TableCell align="center">{row.loc}</TableCell>
                        <TableCell align="center">{moment(row.min).format('YYYY/MM/DD HH:mm')}</TableCell>
                        <TableCell align="center">{moment(row.max).format('YYYY/MM/DD HH:mm')}</TableCell>
                        <TableCell align="center">{row.founder}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        
    )
}

export default List