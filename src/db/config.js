const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () =>
    open({
        filename: "./database.sqlite3",
        driver: sqlite3.Database,
    });