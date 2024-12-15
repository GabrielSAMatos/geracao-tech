class Products{

    static products = [
        {
            id: 1,
            name: 'Mouse',
            price: '10.00'
        },
        {
            id: 2,
            name: 'Keyboard',
            price: '14.97'
        }
    ];

    static add(id, name, price){
        Products.products.push({
            id: id,
            name: name,
            price: price
        });
    }

    static list(){
        return Products.products;
    }

    static edit(index){
        
    }

    static remove(index){
        Products.products.splice(index, 1)
        console.log(Products.products);
        
    }
    

    
    
    
}

module.exports = Products;