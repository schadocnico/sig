export function test(){
    const pgClient = require("pg").Client;
    console.log("testing");
    //var connectionString = "pg://postgres:postgres@176.169.46.223:5432";
    //var client = new pgClient();

    var client = new pgClient({
        user: 'toto',
        host: '176.169.46.223',
        database: 'postgres',
        password: 'toto',
        port: 5432,
    });
    client.connect();
    //var queryTest = "Select "
    return (
        <div>
           <p>test</p>
        </div>
    );
}