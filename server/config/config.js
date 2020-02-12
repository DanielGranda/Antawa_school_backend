//==========================
// Puerto
//==========================
process.env.PORT = process.env.PORT || 3000;


//=============
//Entorno
//=============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




//=============
//Base de datos
//=============
let urleDB;
if (process.env.NODE_ENV === 'dev') {
    urleDB = 'mongodb://localhost/atw_adm';
} else {
    urleDB = 'mongodb://Daniel_Granda:3MDvXBYDCOA9m4xj@antawaschool-shard-00-00-1dxbm.mongodb.net:27017,antawaschool-shard-00-01-1dxbm.mongodb.net:27017,antawaschool-shard-00-02-1dxbm.mongodb.net:27017/atw_adm_nube?ssl=true&replicaSet=AntawaSchool-shard-0&authSource=admin';
}


process.env.URLDB = urleDB;