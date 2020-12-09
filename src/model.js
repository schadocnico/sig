const Pool = require('pg').Pool
const pool = new Pool({
  user: 'toto',
  host: '176.169.46.223',
  database: 'toto',
  password: 'toto',
  port: 5432,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM rdc', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
  module.exports = {
    getMerchants
  }