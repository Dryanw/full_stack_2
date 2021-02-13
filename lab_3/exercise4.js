function Car(obj){
    this.getBrand = function(){
        return 'The manufacturer is: ' + obj.brand;
    };

    this.getModel = function(){
        return 'The model is: ' + obj.model;
    };
}

var telsa = new Car({brand: 'Tesla', model: 'S'});
telsa.getBrand();
telsa.getModel();

var camaro = new Car({brand: 'Chevy', model: 'Camaro'});
camaro.getBrand();
camaro.getModel();