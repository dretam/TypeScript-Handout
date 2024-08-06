console.log("====================Static======================");

class Item {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
    printItemInformation() {
        console.log("Item name: " + this.name + "\nCategorinya: " + this.category + "\nHarganya: " + this.price);
    }
    static purchaseItem() {
        //console.log(this.name);
        //tidak akan bisa bekerja karena, static method tidak membutuhkan instantiate object untuk digunakan.
        console.log("Purchasing item....");
    }
}

let monitor:Item = new Item("LG 21 Inch", "Computer", 2100000);
monitor.printItemInformation();

//monitor.purchaseItem();
//Tidak bisa, karena purchaseItem() adalah static method yang tidak di jalankan oleh instance.
Item.purchaseItem();