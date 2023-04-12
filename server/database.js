import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
}).promise()

export async function getLocations() {
    const [rows] = await pool.query(`SELECT * FROM locations`)
    return rows
}

export async function addLocations(world, loc, min, max, founder) {
    const res = await pool.query(`
    INSERT INTO locations (world, loc, min, max, founder) 
    VALUES(?, ?, ?, ?, ?)
    `,[world, loc, min, max, founder])
    return res
}