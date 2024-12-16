class UserModel {

    static list = [
        {
            name: "Admin",
            login: "Admin"
        }
    ];


    static listing() {
        return UserModel.list;
    };

    static consultById() {

    };

    static create(data) {
        UserModel.list.push(data);
    };

    static update() {

    };

    static delete() {
        UserModel.list.pop();
    };
};

module.exports = UserModel;