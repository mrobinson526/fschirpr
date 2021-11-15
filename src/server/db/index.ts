import * as mysql from 'mysql';
import chirps from './queries/chirps';
import users from './queries/users';


const pool = mysql.createPool ({
    host: 'localhost',
    user: 'chirprapp',
    password: '$pswdtest2020',
    database: 'chirpr'
})

export const Query = (query:string, _values?: any) => {
  return newPromise((_resolve, _reject) => {
    pool.query(query, (err, results) => {
      if(err) {
        console.log(err)
      } else {
        console.log(results);
      }
    });
  });
};

Query('DESCRIBE users')
  .then((results: any) => {
    console.log(results);
    return Query('DESCRIBE chirps');
})
  .then((results: any) => console.log(results))
  .catch((e: any) => console.log(e));

  
   


function newPromise(_arg0: (resolve: any, reject: any) => any) {
  throw new Error('Function not implemented.');
}
function results(results: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}

