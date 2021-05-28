'use strict'
const { ApolloError } = require('apollo-server-errors')
const coursesModel = require('../../../models/Employees')

// Queries
const coursesQueries = {
    employee: async ( root ) => {
        try {
            const res = await coursesModel.findAll({ attributes:[ 'eId', 'cedula', 'nombres', 'apellidos', 'telefono', 'celular', 'email', 'direccion'] })
            return res
        } catch (e) {
            return e
        }
    }
}

// Mutations 
const coursesMutations = {
    createEmployee: async (_root, { input }) => {
        try {
          const res = await  coursesModel.create({ ...input })          
            return res
        } catch (e) {
            return e
        }
    }
}


// Types
const coursesTypes = {
    Employee: async ( ) => {
            try {
                console.log('object')
                // const data = await ClientsModel.findOne({ attributes, where: { cId: deCode(parent.cId) } })
                return data
            } catch { return null }
    },
}


module.exports = {
    coursesQueries,
    coursesMutations,
    coursesTypes
}