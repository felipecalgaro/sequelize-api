const Planet = require('../models/Planet')
const Satellite = require('../models/Satellite')

Planet.hasOne(Satellite, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Satellite.belongsTo(Planet, { foreignKey: 'planetId', as: 'planet' })

module.exports = { Planet, Satellite }