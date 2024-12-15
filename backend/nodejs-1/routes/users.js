class Users{

    static users = [
        {
            id: 1,
            name: 'Gabriel',
            login: 'Gatobrielrs',
            password: '123'
        },
        {
            id: 2,
            name: 'Matos',
            login: 'matos',
            password: '123'
        }
    ];

    static add(id, name, login, password){
        Users.users.push({
            id: id,
            name: name,
            login: login,
            password: password
        });
    }

    static list(){
        return Users.users;
    }

    static edit(index){
        
    }

    static remove(index){
        Users.users.splice(index, 1)
        console.log(Users.users);
        
    }
    

    
    
    
}

module.exports = Users;