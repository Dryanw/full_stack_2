function hasFreeShipping(obj){
    return Object.values(obj).reduce((a, b) => a + b, 0) > 50;
}

hasFreeShipping({'Masks': 5.99, 'HDMI Cable': 15.99});
hasFreeShipping({'XBOX Series X': 599.99});
hasFreeShipping({'Cards': 5.99, 'Books': 25.99, 'Yoga Mat': 20.00});