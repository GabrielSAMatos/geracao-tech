const connection = require('../config/connection');

require('../model/UserTypesModel');
require('../model/TagsModel');
require('../model/UserModel');
require('../model/ProfileModel');
require('../model/PostModel')


connection.sync({force: true});

