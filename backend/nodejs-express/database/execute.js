const UserModel = require('../model/UserModel');
const ProfileModel = require('../model/ProfileModel');
const PostModel = require('../model/PostModel');

async function execute() {

    let user = await UserModel.create({
        is_active: 1,
        email: "test@hotmail",
        username: "test",
        password: 123
    });

    let profile = await ProfileModel.create({
        user_id: user.id,
        firstname: "test",
        surname: " test",
        bio: "test3"
    });

    
    let post = await PostModel.create({
        user_id: user.id,
        title: "test",
        slug: "test",
        content: "testetesteteste"
    })

};

execute();
