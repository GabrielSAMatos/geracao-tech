const Products = require('./products');
const Users = require('./users');

const routes = {
    '/products': {
        'GET': Products.list(),
        'POST': Products.add(),
        'PUT': Products.edit(0),
        'DELETE': Products.remove(0)
    },
    '/users': {
        'GET': Users.list(),
        'POST': Users.add(),
        'PUT': Users.edit(0),
        'DELETE': Users.remove(0)
    }
};

module.exports = routes;