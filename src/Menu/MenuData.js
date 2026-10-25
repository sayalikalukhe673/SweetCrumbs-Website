

const productImages = import.meta.glob(
  "../assets/products/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export function getProductImage(fileName) {
  const imagePath = `../assets/products/${fileName}`;
  return productImages[imagePath] || "";
}




const cakeDesigns = [
        { name: "Design 1", image: "chocolate-truffle1.jpg" },
        { name: "Design 2", image: "chocolate-truffle2.jpg" },
        { name: "Design 3", image: "chocolate-truffle3.jpg" },
        { name: "Design 4", image: "chocolate-truffle4.jpg" },
        { name: "Design 5", image: "chocolate-truffle5.jpg" },
        { name: "Design 6", image: "chocolate-truffle6.jpg" },
        { name: "Design 7", image: "chocolate-truffle7.jpg" },
        // { name: "Design 8", image: "chocolate-truffle8.jpg" },
        { name: "Design 9", image: "chocolate-truffle9.jpg" },
        { name: "Design 10", image: "chocolate-truffle10.jpg" },
];



const chocolateIcecreameCake = [
        { name: "Design 1", image: "strawberry-cake1.jpg" },
        { name: "Design 2", image: "strawberry-cake2.jpg" },
        { name: "Design 3", image: "strawberry-cake3.jpg" },
        { name: "Design 4", image: "strawberry-cake4.jpg" },
       
];

const strawberryDesigns = [
        { name: "Design 1", image: "strawberry-cake1.jpg" },
        { name: "Design 2", image: "strawberry-cake2.jpg" },
        { name: "Design 3", image: "strawberry-cake3.jpg" },
        { name: "Design 4", image: "strawberry-cake4.jpg" },
       
];


const redVelvetDesign = [
  { name: "Design 1", image: "red-velvet-cake1.jpg" },
  { name: "Design 2", image: "red-velvet-cake2.jpg" },
  { name: "Design 3", image: "red-velvet-cake3.jpg" },
  { name: "Design 4", image: "red-velvet-cake4.jpg" },
  { name: "Design 5", image: "red-velvet-cake5.jpg" },
   { name: "Design 6", image: "red-velvet-cake6.jpg" },
];


const BlackForest = [
  { name: "Design 1", image: "black-forest1.jpg" },
  { name: "Design 2", image: "black-forest2.jpg" },
  { name: "Design 3", image: "black-forest3.jpg" },
  { name: "Design 4", image: "black-forest4.jpg" },
  { name: "Design 5", image: "black-forest5.jpg" },
   
];

const WhiteForest = [
  { name: "Design 1", image: "white-forest1.jpg" },
  { name: "Design 2", image: "white-forest2.jpg" },
  { name: "Design 3", image: "white-forest3.jpg" },
  { name: "Design 4", image: "white-forest4.jpg" },
  { name: "Design 5", image: "white-forest5.jpg" },
   
];


const PineApple = [
  { name: "Design 1", image: "pineapple-cake1.jpg" },
  { name: "Design 2", image: "pineapple-cake2.jpg" },
  { name: "Design 3", image: "pineapple-cake3.jpg" },
  { name: "Design 4", image: "pineapple-cake4.jpg" },
  { name: "Design 5", image: "pineapple-cake5.jpg" },
   
];


const butterscoch = [
  { name: "Design 1", image: "butterscotch-cake1.jpg" },
  { name: "Design 2", image: "butterscotch-cake2.jpg" },
  { name: "Design 3", image: "butterscotch-cake3.jpg" },
  { name: "Design 4", image: "butterscotch-cake4.jpg" },
  { name: "Design 5", image: "butterscotch-cake5.jpg" },
   
];

const fudge = [
  { name: "Design 1", image: "chocolate-fudge1.jpg" },
  { name: "Design 2", image: "chocolate-fudge2.jpg" },
  { name: "Design 3", image: "chocolate-fudge3.jpg" },
  { name: "Design 4", image: "chocolate-fudge4.jpg" },
  { name: "Design 5", image: "chocolate-fudge5.jpg" },
   
];

const vanillacake = [
  { name: "Design 1", image: "vanilla-cake1.jpg" },
  { name: "Design 2", image: "vanilla-cake2.jpg" },
  { name: "Design 3", image: "vanilla-cake3.jpg" },
  { name: "Design 4", image: "vanilla-cake4.jpg" },
  { name: "Design 5", image: "vanilla-cake5.jpg" },
   
];

const coffeeMocha = [
  { name: "Design 1", image: "coffee-mocha1.jpg" },
  { name: "Design 2", image: "coffee-mocha2.jpg" },
  { name: "Design 3", image: "coffee-mocha3.jpg" },
  { name: "Design 4", image: "coffee-mocha4.jpg" },
  
   
];
//ice-creame cake

const chocolateIcecreame = [
  { name: "Design 1", image: "chocolate-ice-cream-cake1.jpg" },
  { name: "Design 2", image: "chocolate-ice-cream-cake2.jpg" },
  { name: "Design 3", image: "chocolate-ice-cream-cake3.jpg" },
  { name: "Design 4", image: "chocolate-ice-cream-cake4.jpg" },
  
   
];

const StrawBerryIceCreame = [
  { name: "Design 1", image: "strawberry-ice-cream-cake1.jpg" },
  { name: "Design 2", image: "strawberry-ice-cream-cake2.jpg" },
  { name: "Design 3", image: "strawberry-ice-cream-cake3.jpg" },  
];

const vanillaIceCreame = [
  { name: "Design 1", image: "vanilla-ice-cream-cake1.jpg" },
  { name: "Design 2", image: "vanilla-ice-cream-cake2.jpg" },
  //{ name: "Design 3", image: "vanilla-ice-cream-cake3.jpg" },
  { name: "Design 4", image: "vanilla-ice-cream-cake4.jpg" },
  
   
];

//pesteries

const chocolatePastery = [
  { name: "Design 1", image: "chocolate-pastry1.jpg" },
  { name: "Design 2", image: "chocolate-pastry2.jpg" },
  { name: "Design 3", image: "chocolate-pastry3.jpg" },
  { name: "Design 4", image: "chocolate-pastry4.jpg" },
  
   
];

const redVelvetPestries = [
  { name: "Design 1", image: "red-velvet-pastry1.jpg" },
  { name: "Design 2", image: "red-velvet-pastry2.jpg" },
  { name: "Design 3", image: "red-velvet-pastry3.jpg" },

  
   
];


const pine = [
  { name: "Design 1", image: "pineapple-pastry1.jpg" },
  { name: "Design 2", image: "pineapple-pastry2.jpg" },
  { name: "Design 3", image: "pineapple-pastry3.jpg" },
  { name: "Design 4", image: "pineapple-pastry4.jpg" },
  { name: "Design 5", image: "pineapple-pastry5.jpg" },
   
];


const black = [
  { name: "Design 1", image: "black-forest-pastry1.jpg" },
  { name: "Design 2", image: "black-forest-pastry2.jpg" },
  { name: "Design 3", image: "black-forest-pastry3.jpg" },
  { name: "Design 4", image: "black-forest-pastry4.jpg" },
  { name: "Design 5", image: "black-forest-pastry5.jpg" },
   
];

const mango = [
  { name: "Design 1", image: "mango-pastry1.jpg" },
  { name: "Design 2", image: "mango-pastry2.jpg" },
  { name: "Design 3", image: "mango-pastry3.jpg" },
  { name: "Design 4", image: "mango-pastry4.jpg" },
  { name: "Design 5", image: "mango-pastry5.jpg" },
   
];

//oters cakes

const chocolateCupCake = [
  { name: "Design 1", image: "chocolate-cupcake1.jpg" },
  { name: "Design 2", image: "chocolate-cupcake2.jpg" },
  { name: "Design 3", image: "chocolate-cupcake3.jpg" },
  { name: "Design 4", image: "chocolate-cupcake4.jpg" },
   { name: "Design 5", image: "chocolate-cupcake5.jpg" },
  
   
];


const chocolateBroenee = [
  { name: "Design 1", image: "chocolate-brownie1.jpg" },
  { name: "Design 2", image: "chocolate-brownie2.jpg" },
  { name: "Design 3", image: "chocolate-brownie3.jpg" },
  { name: "Design 4", image: "chocolate-brownie4.jpg" },
   { name: "Design 5", image: "chocolate-brownie5.jpg" },
  
   
];

const vanilaCup = [
  { name: "Design 1", image: "vanilla-cupcake1.jpg" },
  { name: "Design 2", image: "vanilla-cupcake2.jpg" },
  { name: "Design 3", image: "vanilla-cupcake3.jpg" },
  { name: "Design 4", image: "vanilla-cupcake4.jpg" },
   { name: "Design 5", image: "vanilla-cupcake5.jpg" },
  
   
];

const chocolateChipsCookies = [
  { name: "Design 1", image: "chocolate-chip-cookies1.jpg" },
  { name: "Design 2", image: "chocolate-chip-cookies2.jpg" },
  { name: "Design 3", image: "chocolate-chip-cookies3.jpg" },
  { name: "Design 4", image: "chocolate-chip-cookies4.jpg" },
   { name: "Design 5", image: "chocolate-chip-cookies5.jpg" },
  
   
];

const buttercookies = [
  { name: "Design 1", image: "butter-cookies1.jpg" },
  { name: "Design 2", image: "butter-cookies2.jpg" },
  { name: "Design 3", image: "butter-cookies3.jpg" },
  { name: "Design 4", image: "butter-cookies4.jpg" },
   { name: "Design 5", image: "butter-cookies5.jpg" },
  
   
];
export const menuCategories = [
  {
    id: "cakes",
    title: "Cakes",
    description: "Explore our delicious cake collection.",
    image: "chocolate-truffle.jpg",
    products: [
      { id: 1, name: "Chocolate Truffle Cake", image: "chocolate-truffle1.jpg", designs: cakeDesigns },
      { id: 2, name: "Strawberry Cake", image: "strawberry-cake1.jpg", designs: strawberryDesigns },
      { id: 3, name: "Red Velvet Cake", image: "red-velvet-cake1.jpg", designs: redVelvetDesign },
      { id: 4, name: "Black Forest Cake", image: "black-forest1.jpg", designs: BlackForest },
      { id: 5, name: "White Forest Cake", image: "white-forest1.jpg", designs: WhiteForest},
      { id: 6, name: "Pineapple Cake", image: "pineapple-cake1.jpg", designs: PineApple },
       { id: 7, name: "Butterscotch Cake", image: "butterscotch-cake1.jpg", designs: butterscoch },
       { id: 8, name: "Chocolate Fudge Cake", image: "chocolate-fudge1.jpg", designs: fudge },
       { id: 9, name: "Vanilla Cake", image: "vanilla-cake1.jpg", designs: vanillacake },
       { id: 10, name: "Coffee Mocha Cake", image: "coffee-mocha1.jpg", designs: coffeeMocha }
    ]
  },
  {
    id: "ice-cream-cakes",
    title: "Ice Cream Cakes",
    description: "Delicious frozen cake treats.",
    image: "chocolate-ice-cream-cake.jpg",
    products: [
      { id: 11, name: "Chocolate Ice Cream Cake", image: "chocolate-ice-cream-cake1.jpg", designs: chocolateIcecreame },
      { id: 12, name: "Strawberry Ice Cream Cake", image: "strawberry-ice-cream-cake1.jpg", designs: StrawBerryIceCreame },
      { id: 13, name: "Vanilla Ice Cream Cake", image: "vanilla-ice-cream-cake1.jpg", designs: vanillaIceCreame}
    ]
  },
  {
    id: "pastries",
    title: "Pastries",
    description: "Fresh and creamy pastries.",
    image: "chocolate-pastry.jpg",
    products: [
      { id: 14, name: "Chocolate Pastry", image: "chocolate-pastry1.jpg", designs: chocolatePastery },
      { id: 15, name: "Red Velvet Pastry", image: "red-velvet-pastry1.jpg", designs: redVelvetPestries },
      { id: 16, name: "Pineapple Pastry", image: "pineapple-pastry1.jpg", designs: pine },
      { id: 17, name: "Black Forest Pastry", image: "black-forest-pastry1.jpg", designs: black },
      { id: 18, name: "Mango Pastry", image: "mango-pastry1.jpg", designs: mango }
    ]
  },
  {
    id: "other-treats",
    title: "Cupcakes, Cookies & Brownies",
    description: "Small treats, big happiness.",
    image: "chocolate-cupcake.jpg",
    products: [
      { id: 19, name: "Chocolate Cupcake", image: "chocolate-cupcake1.jpg", designs: chocolateCupCake },
      { id: 20, name: "Vanilla Cupcake", image: "vanilla-cupcake1.jpg", designs: vanilaCup },
      { id: 21, name: "Chocolate Chip Cookies", image: "chocolate-chip-cookies1.jpg", designs: chocolateChipsCookies},
      { id: 22, name: "Butter Cookies", image: "butter-cookies1.jpg", designs: buttercookies },
      { id: 23, name: "Chocolate Brownie", image: "chocolate-brownie1.jpg", designs: chocolateBroenee }
    ]
  }
];
