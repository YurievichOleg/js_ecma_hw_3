class Order {
    orderNumber = 1;
    products;
    totalPrice = 0;
    constructor() {
        this.orderNumber++;
        this.products = new Array();
    }
    addProduct(product) {
        if (product instanceof Product) this.products.push(product);
    }
    getTotalPrice() {
        for (let prod of this.products) {
            this.totalPrice += prod.getPrice();
        };
        return this.totalPrice;
    }
}