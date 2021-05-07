import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";
import { FiftyPercentDiscount, NoDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

// const noDiscount = new NoDiscount()
// const shoppingCart = new ShoppingCart(noDiscount);
const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  'Emily',
  'Porfírio',
  '111.111.111-11'
);
const enterpriseCustomer = new EnterpriseCustomer(
 'Lucas Macedo',
 '40/495.84094-506'
);

const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9 ));
shoppingCart.addItem(new Product('Bermuda', 79.9 ));
shoppingCart.addItem(new Product('Tênis', 129.9 ));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
