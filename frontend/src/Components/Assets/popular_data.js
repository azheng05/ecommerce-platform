import bubbleDragon from "./ProductImages/prod_bubblesdragon.png" 
import blueberryBear from "./ProductImages/prod_blueberrybear.png"
import nuggetSeal from "./ProductImages/seal.png"
import headband_green from "./ProductImages/prod_headband_green.png"

let data_product = [
  {
    id:1,
    name:"Bubbles the Dragon",
    image: bubbleDragon,
    new_price: 15,
    old_price: 20,
  },
  {id:2,
    name:"Blueberry the Bear",
    image: blueberryBear,
    new_price: 12,
    old_price: 15,
  },
  {id:2,
    name:"Nugget the Seal",
    image: nuggetSeal,
    new_price: 20,
    old_price: 25,
  },
  {
    id: 3,
    name: "Green Mesh Headband",
    category: "Accessories",
    image: headband_green,
    new_price: 8,
    old_price: 15,
  },
];

export default data_product;
