console.log("=== JOBSHEET TAHAP 9-13 ===");

// DATA PRODUK
const products = [
    {
        id: 1,
        title: "Laptop A",
        price: 1000,
        category: "laptops",
        brand: "TechBrand",
        stock: 10,
        rating: 4.5,
        tags: ["computer", "electronics"]
    },
    {
        id: 2,
        title: "Laptop B",
        price: 1200,
        category: "laptops",
        brand: "TechBrand",
        stock: 5,
        rating: 4.7,
        tags: ["computer", "office"]
    },
    {
        id: 3,
        title: "Phone A",
        price: 800,
        category: "phones",
        brand: "PhoneBrand",
        stock: 15,
        rating: 4.2,
        tags: ["mobile", "electronics"]
    },
    {
        id: 4,
        title: "Laptop C",
        price: 1500,
        category: "laptops",
        brand: "ProBrand",
        stock: 7,
        rating: 4.8,
        tags: ["computer", "premium"]
    },
    {
        id: 5,
        title: "Headphone A",
        price: 300,
        category: "audio",
        brand: "AudioBrand",
        stock: 20,
        rating: 4.0,
        tags: ["audio", "gadget"]
    },
    {
        id: 6,
        title: "Phone B",
        price: 900,
        category: "phones",
        brand: "PhoneBrand",
        stock: 12,
        rating: 4.4,
        tags: ["mobile", "gadget"]
    }
];
// BAGIAN 9: GROUPING & AGGREGATION
console.log("\n=== BAGIAN 9: GROUPING & AGGREGATION ===");


// Latihan 9.1
function groupByCategory(products) {

    return products.reduce((groups, product) => {

        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;

    }, {});
}

const groupedProducts = groupByCategory(products);

console.log("Produk berdasarkan kategori:");
console.log(groupedProducts);


// Latihan 9.2
const categorySummary = Object.entries(groupedProducts)
    .map(([category, items]) => {

        return {
            category: category,
            totalProducts: items.length
        };

    });

console.log("Jumlah produk setiap kategori:");
console.table(categorySummary);

// BAGIAN 10: FREQUENCY COUNTING

console.log("\n=== BAGIAN 10: FREQUENCY COUNTING ===");

function countFrequency(array) {

    return array.reduce((counts, item) => {

        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log(
    "Frequency words:",
    countFrequency(words)
);

const categories = products.map(product => product.category);

console.log(
    "Frequency category:",
    countFrequency(categories)
);
const allTags = products.flatMap(product => product.tags);

console.log(
    "Frequency tags:",
    countFrequency(allTags)
);
const roundedRatings = products.map(
    product => Math.round(product.rating)
);

console.log(
    "Frequency rating:",
    countFrequency(roundedRatings)
);

const brands = products.map(product => product.brand);

console.log(
    "Frequency brand:",
    countFrequency(brands)
);

// BAGIAN 11: SET

console.log("\n=== BAGIAN 11: SET ===");

const uniqueCategories = [
    ...new Set(
        products.map(product => product.category)
    )
];

console.log(
    "Unique categories:",
    uniqueCategories
);

const uniqueBrands = [
    ...new Set(
        products.map(product => product.brand)
    )
];

console.log(
    "Unique brands:",
    uniqueBrands
);
const uniqueTags = [
    ...new Set(
        products.flatMap(product => product.tags)
    )
];

console.log(
    "Unique tags:",
    uniqueTags
);

const categorySet = new Set(uniqueCategories);

console.log(
    "Apakah kategori laptops ada?",
    categorySet.has("laptops")
);

console.log(
    "Apakah kategori beauty ada?",
    categorySet.has("beauty")
);

// BAGIAN 12: MAP

console.log("\n=== BAGIAN 12: MAP ===");


function buildProductLookup(products) {

    const productMap = new Map();

    for (const product of products) {

        productMap.set(product.id, product);

    }

    return productMap;
}


const productMap = buildProductLookup(products);

console.log(
    "Product Map:",
    productMap
);

const productId3 = productMap.get(3);

console.log(
    "Produk dengan ID 3:",
    productId3
);

console.log(
    "Apakah ID 10 tersedia?",
    productMap.has(10)
);

console.log(
    "Apakah ID 3 tersedia?",
    productMap.has(3)
);

console.log(
    "Jumlah produk dalam Map:",
    productMap.size
);


const findResult = products.find(
    product => product.id === 3
);

const mapResult = productMap.get(3);

console.log(
    "Hasil find():",
    findResult
);

console.log(
    "Hasil Map.get():",
    mapResult
);


console.log("\n=== BAGIAN 13: STACK ===");


class Stack {

    constructor() {
        this.items = [];
    }

    push(item) {

        this.items.push(item);

    }

    pop() {

        return this.items.pop();

    }
    peek() {

        return this.items[this.items.length - 1];

    }

    isEmpty() {

        return this.items.length === 0;

    }

}
const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");


console.log(
    "Search history:",
    searchHistory.items
);

console.log(
    "Pencarian terakhir:",
    searchHistory.peek()
);

console.log(
    "POP:",
    searchHistory.pop()
);

console.log(
    "Search history setelah pop:",
    searchHistory.items
);


console.log(
    "Apakah Stack kosong?",
    searchHistory.isEmpty()
);

console.log("\n=== STACK: SEARCH HISTORY ===");

const history = new Stack();

history.push("laptop");
history.push("phone");
history.push("tablet");

console.log("Riwayat pencarian:");
console.log(history.items);

const previousSearch = history.pop();

console.log(
    "Search yang di-undo:",
    previousSearch
);

console.log(
    "Riwayat setelah undo:",
    history.items
);

console.log("\n=== TAHAP 9-13 SELESAI ===");