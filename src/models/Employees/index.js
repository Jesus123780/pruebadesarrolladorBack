const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')

sequelize.sync()

const Employees = sequelize.define('employees', {
    eId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) { return enCode(this.getDataValue(x)) }
    },
    cedula: {
        type: Sequelize.INTEGER(40),
    },
    
    nombres: {
        type: Sequelize.STRING(30),
    },
    apellidos: {
        type: Sequelize.STRING(30),
    },
    
    telefono: {
        type: Sequelize.INTEGER(30),
    },
    
    celular: {
        type: Sequelize.INTEGER(30),
    },
    email: {
        type: Sequelize.STRING(30),
    },
    
    direccion: {
        type: Sequelize.STRING(40),
    },
    
},
)

module.exports = Employees