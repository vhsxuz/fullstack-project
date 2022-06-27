import {Sequelize} from 'sequelize';

const db = new Sequelize('mern_db', 'root', 'Andreas2905', {
    host: 'localhost',
    dialect: 'mysql',

});

export default db;