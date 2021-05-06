import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";


const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9 ));
shoppingCart.addItem(new Product('Bermuda', 79.9 ));
shoppingCart.addItem(new Product('Tênis', 129.9 ));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
