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

            if (urlParts.pathname === '/nearby' && query.lat && query.long && query.r) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(
                    JSON.stringify({
                        pokemons: filter.getPokemonsNerby(query.lat, query.long, query.r)
                    })
                )

                return
            }

            if (urlParts.pathname === '/nearby_rect' &&
                query.topLat && query.topLong && query.bottomLat && query.bottomLong
            ) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(
                    JSON.stringify({
                        pokemons: filter.getPokemonsInRect(query.topLat, query.topLong, query.bottomLat, query.bottomLong)
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

