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
    urleDB = process.env.MONGO_URI;
}


process.env.URLDB = urleDB;