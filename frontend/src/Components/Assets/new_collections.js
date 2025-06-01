import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";

/*Accessories*/
import headband_green from "./ProductImages/prod_headband_green.png"

/*Plushies*/
import bubbleDragon from "./ProductImages/prod_bubblesdragon.png"
import blueberryBear from "./ProductImages/prod_blueberrybear.png"

let new_collections = [
  {
    id: 1,
    name: "Bubbles the Dragon",
    image: bubbleDragon,
    new_price: 15,
    old_price: 20,
  },
  {
    id: 3,
    name: "Green Mesh Headband",
    category: "Accessories",
    image: headband_green,
    new_price: 8,
    old_price: 15,
  },
  {
    id: 2,
    name: "Blueberry the Bear",
    image: blueberryBear,
    new_price: 12,
    old_price: 15,
  },
];

export default new_collections;
