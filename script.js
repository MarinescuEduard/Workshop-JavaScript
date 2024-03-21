// Creaza o clasa Product cu proprietati name, price, description si image
// - toate proprietatile sunt parametri in constructor
// - name - string
// - price - number
// - description - string
// - image - string sub forma cale de fisier ce indica catre o imagine din directorul img
//          -ex: 'img/jeans1.jpg'
// instantiaza un obiect de test si afiseaza-l in consola

class Product {
	constructor(name, price, description, image) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
	}
}

const testProduct = new Product("Blugi", 100, "Cei mai smecheri blugi", "img/jeans1.jpg");

class DiscountProduct extends Product {
	constructor(name, price, description, image, discount) {
		super(name, price, description, image);
		this.discount = discount;
	}

	getDiscountedPrice() {
		return this.price - this.discount;
	}
}

const discountedProduct = new DiscountProduct("Blugi", 100, "Cei mai smecheri blugi", "img/jeans1.jpg", 20);

console.log(discountedProduct);
console.log(discountedProduct.getDiscountedPrice());

const productList = [];

productList.push(discountedProduct);
productList.push(new DiscountProduct("Bluza", 120, "Blugi normali dar scumpi", "img/jeans2.jpg", 15));
productList.push(new DiscountProduct("Bluza", 200, "Blugi normali dar scumpi", "img/jeans3.jpg", 0));

console.log(productList);

const productNode = document.getElementById("products-list");

for (let i = 0; i < productList.length; i++) {
	const newElement = document.createElement("div");
	newElement.classList.add("card");
	newElement.innerHTML = `<img src='${productList[i].image}' alt='Denim Jeans'>
    <h1>${productList[i].name}</h1>
    <p class="price">
        <span class="full-price">${productList[i].price}</span>
        <span class="discounted-price">${productList[i].getDiscountedPrice()}</span>
    </p>
    <p>${productList[i].description}</p>
    <p><button>Add to Cart</button></p>`

    productNode.appendChild(newElement);
}
// Creaza o clasa DiscountProduct ce mosteneste din clasa Product:
// - are o proprietate noua discount - numar intreg parametru in constructor (ex: 20)
// - are o metoda getDiscountedPrice() - intoarce pretul produsului cu discount aplicat
// instantiaza un obiect de test si afiseaza-l in consola

// creaza un array numit products
// - instantiaza 3 obiecte din clasa DiscountProduct si adauga-le in array-ul creat
// afiseaza array-ul creat in consola

// folosind 'for' itereaza array-ul de obiecte si creeaza elemente HTML sub forma de mai jos
// si adauga-le ca si copii in elementul din DOM cu id='products-list'
/**
 * <div class="card">
        <img src="${product.image}" alt="Denim Jeans">
        <h1>${product.name}</h1>
        <p class="price">
            <span class="full-price">${product.price}</span>
            <span class="discounted-price">${product.getDiscountedPrice()}</span>
        </p>
        <p>${product.description}</p>
        <p><button>Add to Cart</button></p>
    </div>
 */
