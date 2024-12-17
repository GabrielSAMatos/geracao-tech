class PostModel {
    static list = [
        {
            id: 1,
            title: "HTML e CSS",
            content: "",
            user_id: 1
        },
        {
            id: 2,
            title: "JAVASCRIPT",
            content: "",
            user_id: 2
        }
    ];


    static listing() {
        return PostModel.list;
    };

    static consultById(id) {
        const data =  PostModel.list.filter(item => item.id == id);
        return data;
    };

    static create(data) {
        PostModel.list.push(data);
    };

    static update(id, data) {
        const indice = PostModel.list.findIndex(item => item.id == id);
        PostModel.list[indice] = data;

        /*PostModel.list.filter(item => {
            if(item.id == id){
                return data;
            } else{
                return item;
            }
        });
        PostModel.list = data;
        */
    };

    static delete(id) {
        const data = PostModel.list.filter(item => item.id != id);
        PostModel.list = data;
    };
};

module.exports = PostModel;