class OuterWear {
  constructor(
    color = "black",
    size = "L",
    fabric = "polyester",
    pockets = 0,
    hood = false
  ) {
    this.isWearing = false;
    this.color = color;
    this.size = size;
    this.fabric = fabric;
    this.pockets = pockets;
    this.hood = hood;
  }

  wear() {
    this.isWearing = true;
    console.log(`Putting on outerwear...`);
  }

  unwear() {
    this.isWearing = false;
    console.log(`Taking of outerwear...`);
  }
}

class Jacket extends OuterWear {
  constructor(color, size, fabric, pockets, hood, season) {
    super(color, size, fabric, pockets, hood);
    this.season = season;
  }

  wear() {
    this.isWearing = true;
    console.log("Putting on a jacket...");
  }
}

class Inventory {
  constructor() {
    this.products = [];
    this.length = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.length++;
  }

  displayProducts() {
    this.products.forEach(function (value) {
      console.log(
        `| ${value.color} | ${value.season} | ${value.size} | ${value.current} | ${value.price}\n`
      );
    });
  }
}

let gap = new Inventory();

gap.addProduct(new Jacket("red", "M", "cotton", 2, true, "Fall"));
gap.addProduct(new Jacket("red", "M", "cotton", 2, true, "Fall"));
gap.addProduct(new Jacket("red", "M", "cotton", 2, true, "Fall"));

gap.displayProducts();
