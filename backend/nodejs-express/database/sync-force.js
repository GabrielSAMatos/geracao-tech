const connection = require('../config/connection');

require('../model/UserTypesModel');
require('../model/TagsModel');
require('../model/UserModel');
require('../model/ProfileModel');
require('../model/PostModel');
require('../model/PostTagModel');


connection.sync({force: true});

