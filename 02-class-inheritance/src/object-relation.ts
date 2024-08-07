console.log("====================Object Relation======================");

class Category{
    name: string;
    description: string;

    constructor(name:string, description:string){
        this.name = name;
        this.description = description;
    }
}

//Type alias
type Supplier = {
    company: string,
    contact: string
};

class Product{
    name: string;
    price: number;
    stock?:number;
    category: Category;
    supplier: Supplier;
    
    constructor(name:string, price:number, category:Category, supplier:Supplier){
        this.name = name;
        this.price = price;
        this.category = category;
        this.supplier = supplier;
    }
}

let tehBotol:Product = new Product(
    'Teh Botol', 
    5000, 
    {
        name: 'Minuman', 
        description: 'Product Minuman'
    },
    {
        company: 'Indofood',
        contact: 'Bambang'
    }
);
console.log(tehBotol);

let elektronik:Category = new Category('Elektronik', 'Semua produk elektronik');
let sony:Supplier = {company: 'Sony', contact: 'Adam'};
let monitor:Product = new Product('Monitor LED 27 inch', 5_000_000, elektronik, sony);
console.log(monitor);

//monitor.stock = 4; tanpa diisi akan menggunakan default value destructuring, yaitu 1
const {name, price, stock = 1, category, supplier: {company, contact}} = monitor;
console.log(`${name}, ${price}, ${stock}, ${category.name}, ${company}, ${contact}`);

type Citizen = {
    name:string,
    nomorKtp:string,
    pilihPresiden(nomorPemilih:string):void
}

type Athlete = {
    sport: string,
    getTrophy():string,
    registerToCompetition: (name:string, country:string) => string
}

//Type Intersection, bisa menggabungkan 2 type alias menjadi satu
type LocalSportsman = Citizen & Athlete;

//sifatnya jadi seperti 2 interface di extends, jadi wajib implementasi keduanya
let yolla:LocalSportsman = {
    name: 'Yolla Yuliana',
    nomorKtp: '677',
    sport: 'Volley Ball',
    pilihPresiden: function(nomorPemilih: string):void{
        console.log(`${nomorPemilih} memilih presiden-nya`);
    },
    getTrophy: ():string => {
        return "Emas";
    },
    registerToCompetition(name:string, country:string):string{
        return `${name} dari ${country} sudah ter-register`;
    }
}
console.log(yolla);