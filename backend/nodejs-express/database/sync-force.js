const connection = require('../config/connection');

require('../model/UserTypesModel');
require('../model/TagsModel');

connection.sync({force: true});

