function product(name, price){
    return {
        'name': name,
        'price': price,
        getInfo: function(){
            return 'The item: ' + this.name + ' costs: ' + this.price;
        }
    }
}

var apples = product('apples', 25);
apples.getInfo();

var soda = product('soda', 2);
soda.getInfo();