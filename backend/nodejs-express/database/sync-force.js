const connection = require('../config/connection');

require('../model/TagsModel');
require('../model/UserModel');
require('../model/ProfileModel');
require('../model/PostModel');
require('../model/PostTagModel');
require('../model/CommentsModel');



connection.sync({force: true});

