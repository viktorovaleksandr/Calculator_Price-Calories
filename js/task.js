const SIZE_SMALL = 'SIZE_SMALL';
const SIZE_MEDIUM = 'SIZE_MEDIUM';
const SIZE_LARGE = 'SIZE_LARGE';

const TOPPING_CHEESE = 'TOPPING_CHEESE';
const TOPPING_SALAD = 'TOPPING_SALAD';
const TOPPING_POTATO = 'TOPPING_POTATO';
const TOPPING_SEASONING = 'TOPPING_SEASONING';
const TOPPING_MAYO = 'TOPPING_MAYO';

const hamburgerSize = {

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

Object.setPrototypeOf(hamburgerSize,toppings);

function Hamburger(size) {

	switch(size) {
		case SIZE_SMALL:
    		this.price = hamburgerSize.SIZE_SMALL.price;
			this.calorie = hamburgerSize.SIZE_SMALL.calorie;
    		break;
  		case SIZE_MEDIUM:
    		this.price = hamburgerSize.SIZE_MEDIUM.price;
			this.calorie = hamburgerSize.SIZE_MEDIUM.calorie;
    		break;
  		case SIZE_LARGE:
    		this.price = hamburgerSize.SIZE_LARGE.price;
			this.calorie = hamburgerSize.SIZE_LARGE.calorie;
    	break; 
	}
};

Hamburger.prototype.addTopping = function(topping) {

	switch(topping) {
		case TOPPING_CHEESE:
    		this.price += hamburgerSize.TOPPING_CHEESE.price;
			this.calorie += hamburgerSize.TOPPING_CHEESE.calorie;
    		break;
  		case TOPPING_SALAD:
    		this.price += hamburgerSize.TOPPING_SALAD.price;
			this.calorie += hamburgerSize.TOPPING_SALAD.calorie;
    		break;
  		case TOPPING_POTATO:
    		this.price += hamburgerSize.TOPPING_POTATO.price;
			this.calorie += hamburgerSize.TOPPING_POTATO.calorie;
    		break;
    	case TOPPING_SEASONING:
    		this.price += hamburgerSize.TOPPING_SEASONING.price;
			this.calorie += hamburgerSize.TOPPING_SEASONING.calorie;
    		break; 
    	case TOPPING_MAYO:
    		this.price += hamburgerSize.TOPPING_MAYO.price;
			this.calorie += hamburgerSize.TOPPING_MAYO.calorie;
    	break;  
	}
};

Hamburger.prototype.getPrice = function() {
   console.log(`Hamburger price with sauce: ${this.price} тугриков`);
};

Hamburger.prototype.getCallories = function() {
   console.log(`Callories with sauce: ${this.calorie} калорий`);
};

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

hamburger.getPrice();
hamburger.getCallories();