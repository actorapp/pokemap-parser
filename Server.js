'use strict'

const HOST_NAME = '0.0.0.0'
const PORT = 3000
const DATA_RELOAD_TIMOUT = 1000 * 60

const DataLoader = require('./DataLoader')
const Filter = require('./Filter')

const http = require('http')
const url = require('url')

console.log('Loading data')
DataLoader.loadData()
    .then(data => {
        const filter = new Filter(data)

        setInterval(() => {
            console.log('Reloading data')
            DataLoader.loadData()
                .then(data => {
                    filter.data = data
                })
        }, DATA_RELOAD_TIMOUT)

        const server = http.createServer((req, res) => {
            const urlParts = url.parse(req.url, true)
            const query = urlParts.query

            if (urlParts.pathname === '/api/v1/nearby' && query.lat && query.long && query.r) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')

                let args = [query.lat, query.long, query.r]

                res.end(
                    JSON.stringify({
                        pokemons: filter.getPokemonsNerby(...args),
                        gyms: filter.getGymsNerby(...args),
                        pokestops: filter.getPokestopsNerby(...args)
                    })
                )

                return
            }

            if (urlParts.pathname === '/api/v1/nearby_rect' &&
                query.topLat && query.topLong && query.bottomLat && query.bottomLong
            ) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')

                let coordinates = [query.topLat, query.topLong, query.bottomLat, query.bottomLong]

                res.end(
                    JSON.stringify({
                        pokemons: filter.getPokemonsInRect(...coordinates),
                        gyms: filter.getGymsInRect(...coordinates),
                        pokestops: filter.getPokestopsInRect(...coordinates)
                    })
                )

                return
            }


            res.statusCode = 500
            res.end()
        })

        server.listen(PORT, HOST_NAME, () => {
            console.log(`Server running at http://${HOST_NAME}:${PORT}/`)
        })
    })

