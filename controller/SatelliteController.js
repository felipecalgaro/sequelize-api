const Planet = require('../models/Planet')
const Satellite = require('../models/Satellite')

module.exports = {
  async store(req, res) {
    const { name, serial_number } = req.body
    const { planetId } = req.params

    const planet = await Planet.findByPk(planetId)
    if (!planet) res.send('planet does not exist')

    const satellite = await Satellite.create({ name, serial_number, planetId })
    return res.json(satellite)
  },

  async index(req, res) {
    const { planetId } = await req.params

    if (!planetId) res.send('planet does not exist')

    const planet = await Planet.findByPk(planetId, { include: Satellite })
    return res.json(planet)
  }
}