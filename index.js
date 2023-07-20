


class ProductsManager {
    constructor(products) {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){

        if(title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined){
            console.log("There's a property missing")
        } else if (this.products.find(prod => prod.code === code)){
            console.log("That code already exists")
        } else {
            let id = this.products.length;
            let newId = Number(this.products.length +1) 
            if(id > 0 ){
                this.products.push({
                    title, 
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                    id : newId
                })} else {
                    this.products.push({
                        title, 
                        description,
                        price,
                        thumbnail,
                        code,
                        stock,
                        id : 1
                    });
                }
        }
    };
    
    getAllProducts(){
        console.log("SUCCESS retrieving all products")
        return this.products
    };

    getProductById(id){
        let product = this.products.find(prod => prod.id === id);
        if(id === product.id){
            console.log("SUCCESS")
            return product;
        } else {
            console.log("SUCH PRODUCT DOESN'T EXIST")
        }
    }
    
};

const myStore = new ProductsManager();

myStore.addProduct( "Silla", "muy bonita", 12333,"img01", 478, 1);
myStore.addProduct("Mesa", "roble reforzado", 24500, "img02", 428, 6 );
myStore.addProduct("Cuadro", "arte decorativo", 3500, "img03", 458, 8 );

// const products = myStore.getAllProducts();
const productId = myStore.getProductById(3);
// console.log(products);
console.log(productId);
