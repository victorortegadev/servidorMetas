const initOptions = {}
const pgp = require('pg-promise')(initOptions)

require('dotenv').config()

const cn = {
    user: process.env.DEBUG_USER,
    password: process.env.DEBUG_PASSWORD,
    host:'localhost',
    port: 5432,
    database: 'postgres'
}

const db = pgp(cn)

module.exports = db;