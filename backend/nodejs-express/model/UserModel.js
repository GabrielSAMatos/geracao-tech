class UserModel {

    static list = [
        {
            id: 1,
            name: "Admin",
            login: "Admin"
        },
        {
            id: 2,
            name: "teste",
            login: "teste"
        }
    ];


    static listing() {
        return UserModel.list;
    };

    static consultById(id) {
        const data =  UserModel.list.filter(item => item.id == id);
        return data;
    };

    static create(data) {
        UserModel.list.push(data);
    };

    static update(id, data) {
        const indice = UserModel.list.findIndex(item => item.id == id);
        UserModel.list[indice] = data;

        /*UserModel.list.filter(item => {
            if(item.id == id){
                return data;
            } else{
                return item;
            }
        });
        UserModel.list = data;
        */
    };

    static delete(id) {
        const data = UserModel.list.filter(item => item.id != id);
        UserModel.list = data;
    };
};

module.exports = UserModel;