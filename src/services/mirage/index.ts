import { createServer, Model } from 'miragejs'
import { uuid } from 'uuidv4'

export function makeServer() {
    const server = createServer({
        models: {
            continent: Model
        },
        seeds(server) {
            server.db.loadData({
                continents: [
                    {
                        id: uuid(),
                        name: 'Europa',
                        description: 'Ocontinente mais antigo',
                        image: {
                            url: '/assets/images/europa-image-2.jpg',
                            title: 'London Eye Big Ben, London, England'
                        }
                    },
                    {
                        id: uuid(),
                        name: 'America do Norte',
                        description: 'Segundo maior continente do mundo',
                        image: {
                            url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                            title: 'Manhattan, New York, NY, USA'
                        }
                    },
                    {
                        id: uuid(),
                        name: 'America do Sul',
                        description: 'Maior bacia hidrográfica do mundo',
                        image: {
                            url: 'https://images.unsplash.com/photo-1461609027498-7c0524aba788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
                            title: 'Cristo Redentor, Rio de Janeiro, RJ, Brasil'
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Asia',
                        description: 'Mais extenso e mais populoso continente do mundo',
                        image: {
                            url: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
                            title: 'Fujiyoshida, Japan'
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Africa',
                        description: 'Savanas com riquíssima diversidade de animais silvestres',
                        image: {
                            url: 'https://images.unsplash.com/photo-1521766794531-959971b1f444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                            title: 'Masai Mara National Reserve, Kenya'
                        }
                    },
                    {
                        id: uuid(),
                        name: 'Oceania',
                        description: 'Maior concentração de ilhas existentes no planeta Terra',
                        image: {
                            url: 'https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                            title: 'Sydney, Australia'
                        }
                    }
                ]
            })
        },
        routes() {
            this.namespace = 'api'
            this.timing = 750

            this.get('/continents', (schema, request) => {
                return schema.db.continents
            })

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}