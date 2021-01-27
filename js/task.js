const SIZE_SMALL = 'SIZE_SMALL';
const SIZE_MEDIUM = 'SIZE_MEDIUM';
const SIZE_LARGE = 'SIZE_LARGE';

const TOPPING_CHEESE = 'TOPPING_CHEESE';
const TOPPING_SALAD = 'TOPPING_SALAD';
const TOPPING_POTATO = 'TOPPING_POTATO';
const TOPPING_SEASONING = 'TOPPING_SEASONING';
const TOPPING_MAYO = 'TOPPING_MAYO';

const toppings = {
	
   TOPPING_CHEESE: {
    	price: 10,
     	calorie: 20
   },
   TOPPING_SALAD: {
    	price: 20,
      calorie: 50
   },
   TOPPING_POTATO: {
    	price: 15,
      calorie: 10
   },
   TOPPING_SEASONING: {
    	price: 15,
      calorie: 0
   },
   TOPPING_MAYO: {
   	price: 20,
      calorie: 5
   },
};

const sizeHamburger = {

   SIZE_SMALL: {
      price: 50,
      calorie: 20
   },
   SIZE_MEDIUM: {
      price: 70,
      calorie: 30
   },
   SIZE_LARGE: {
      price: 100,
      calorie: 40
  	},
};

Object.setPrototypeOf(sizeHamburger,toppings);
Object.setPrototypeOf(Hamburger,sizeHamburger);

function Hamburger(size) {

	switch(size) {
		case SIZE_SMALL:
    		this.price = sizeHamburger.SIZE_SMALL.price;
			this.calorie = sizeHamburger.SIZE_SMALL.calorie;
    		break;
  		case SIZE_MEDIUM:
    		this.price = sizeHamburger.SIZE_MEDIUM.price;
			this.calorie = sizeHamburger.SIZE_MEDIUM.calorie;
    		break;
  		case SIZE_LARGE:
    		this.price = sizeHamburger.SIZE_LARGE.price;
			this.calorie = sizeHamburger.SIZE_LARGE.calorie;
    	break; 
	}
};

Hamburger.prototype.addTopping = function(topping) {

	switch(topping) {
		case TOPPING_CHEESE:
    		this.price += sizeHamburger.TOPPING_CHEESE.price;
			this.calorie += sizeHamburger.TOPPING_CHEESE.calorie;
    		break;
  		case TOPPING_SALAD:
    		this.price += sizeHamburger.TOPPING_SALAD.price;
			this.calorie += sizeHamburger.TOPPING_SALAD.calorie;
    		break;
  		case TOPPING_POTATO:
    		this.price += sizeHamburger.TOPPING_POTATO.price;
			this.calorie += sizeHamburger.TOPPING_POTATO.calorie;
    		break;
    	case TOPPING_SEASONING:
    		this.price += sizeHamburger.TOPPING_SEASONING.price;
			this.calorie += sizeHamburger.TOPPING_SEASONING.calorie;
    		break; 
    	case TOPPING_POTATO:
    		this.price += sizeHamburger.TOPPING_POTATO.price;
			this.calorie += sizeHamburger.TOPPING_POTATO.calorie;
    	break;  
	}
};

Hamburger.prototype.getPrice = function() {
   console.log(`Price: ${this.price} тугриков`);
};

Hamburger.prototype.getCallories = function() {
   console.log(`Callories: ${this.calorie} калорий`);
};

const hamburger = new Hamburger(SIZE_SMALL);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

hamburger.getPrice();
hamburger.getCallories();
