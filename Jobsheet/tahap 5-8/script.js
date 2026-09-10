console.log("=== JOBSHEET TAHAP 5-8 ===");

// DATA PRODUK
const products = [
    {
        id: 1,
        title: "Laptop A",
        price: 1000,
        category: "laptops",
        stock: 10,
        rating: 4.5
    },
    {
        id: 2,
        title: "Laptop B",
        price: 1200,
        category: "laptops",
        stock: 5,
        rating: 4.7
    },
    {
        id: 3,
        title: "Phone A",
        price: 800,
        category: "phones",
        stock: 15,
        rating: 4.2
    },
    {
        id: 4,
        title: "Laptop C",
        price: 1500,
        category: "laptops",
        stock: 7,
        rating: 4.8
    },
    {
        id: 5,
        title: "Headphone A",
        price: 300,
        category: "audio",
        stock: 20,
        rating: 4.0
    }
];

// BAGIAN 5: MAP, FILTER, REDUCE
console.log("\n=== BAGIAN 5: MAP, FILTER, REDUCE ===");
const titles = products.map(product => product.title);

console.log("Semua judul produk:", titles);

const expensiveProducts = products.filter(product => product.price > 500);

console.log("Produk dengan harga > 500:", expensiveProducts);

const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
);

console.log("Total stock:", totalStock);

const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((total, price) => total + price, 0)
    / laptopPrices.length;

console.log("Harga laptop:", laptopPrices);
console.log("Rata-rata harga laptop:", averageLaptopPrice);

function getStatistics(products) {

    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (total, product) => total + product.price,
        0
    );

    const averagePrice =
        totalProducts > 0
            ? totalPrice / totalProducts
            : 0;

    const highestPrice =
        totalProducts > 0
            ? Math.max(...products.map(product => product.price))
            : 0;

    const lowestPrice =
        totalProducts > 0
            ? Math.min(...products.map(product => product.price))
            : 0;

    const totalStock = products.reduce(
        (total, product) => total + product.stock,
        0
    );

    const averageRating =
        totalProducts > 0
            ? products.reduce(
                (total, product) => total + product.rating,
                0
            ) / totalProducts
            : 0;

    return {
        totalProducts: totalProducts,
        averagePrice: averagePrice,
        highestPrice: highestPrice,
        lowestPrice: lowestPrice,
        totalStock: totalStock,
        averageRating: averageRating
    };
}

console.log("Statistik produk:", getStatistics(products));

// BAGIAN 6: LINEAR SEARCH
console.log("\n=== BAGIAN 6: LINEAR SEARCH ===");

function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }

    }

    return -1;
}


// Contoh penggunaan

const numbers = [10, 20, 30, 40, 50];

console.log(
    "Linear Search angka 30:",
    linearSearch(numbers, 30)
);

console.log(
    "Linear Search angka 100:",
    linearSearch(numbers, 100)
);

function linearSearchProductById(products, targetId) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === targetId) {
            return i;
        }

    }

    return -1;
}

const productIndex = linearSearchProductById(products, 3);

console.log(
    "Index produk dengan ID 3:",
    productIndex
);

if (productIndex !== -1) {
    console.log(
        "Produk yang ditemukan:",
        products[productIndex]
    );
}

console.log("\n=== BAGIAN 7: BINARY SEARCH ===");

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }

    return -1;
}

const sortedNumbers = [10, 20, 30, 40, 50, 60, 70];

console.log(
    "Binary Search angka 40:",
    binarySearch(sortedNumbers, 40)
);

console.log(
    "Binary Search angka 100:",
    binarySearch(sortedNumbers, 100)
);

// Urutkan produk berdasarkan harga
const sortedProductsByPrice = [...products].sort(
    (a, b) => a.price - b.price
);

console.log(
    "Produk setelah diurutkan berdasarkan harga:",
    sortedProductsByPrice
);

function binarySearchByPrice(sortedProducts, targetPrice) {

    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) {
            return mid;
        }

        if (sortedProducts[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }

    return -1;
}


const priceIndex = binarySearchByPrice(
    sortedProductsByPrice,
    1200
);

console.log(
    "Index produk dengan harga 1200:",
    priceIndex
);

if (priceIndex !== -1) {

    console.log(
        "Produk dengan harga 1200:",
        sortedProductsByPrice[priceIndex]
    );

}

// BAGIAN 8: SORTING
console.log("\n=== BAGIAN 8: SORTING ===");

const sortNumbers = [5, 3, 8, 1];

const ascendingNumbers = [...sortNumbers].sort(
    (a, b) => a - b
);

const descendingNumbers = [...sortNumbers].sort(
    (a, b) => b - a
);

console.log(
    "Ascending:",
    ascendingNumbers
);

console.log(
    "Descending:",
    descendingNumbers
);

function bubbleSort(numbers) {

    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                // Tukar posisi
                [
                    arr[j],
                    arr[j + 1]
                ] = [
                    arr[j + 1],
                    arr[j]
                ];
            }
        }
    }
    return arr;
}


const numbersToSort = [5, 3, 8, 1, 2];

const bubbleSortedNumbers = bubbleSort(numbersToSort);

console.log(
    "Array asli:",
    numbersToSort
);

console.log(
    "Hasil Bubble Sort:",
    bubbleSortedNumbers
);

function sortProducts(products, sortBy) {

    const result = [...products];

    if (sortBy === "price-asc") {

        return result.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sortBy === "price-desc") {

        return result.sort(
            (a, b) => b.price - a.price
        );

    }

    if (sortBy === "rating") {

        return result.sort(
            (a, b) => b.rating - a.rating
        );

    }

    if (sortBy === "title") {

        return result.sort(
            (a, b) => a.title.localeCompare(b.title)
        );

    }

    return result;
}

console.log(
    "Produk harga termurah:",
    sortProducts(products, "price-asc")
);

console.log(
    "Produk harga termahal:",
    sortProducts(products, "price-desc")
);

console.log(
    "Produk berdasarkan rating:",
    sortProducts(products, "rating")
);

console.log(
    "Produk berdasarkan judul:",
    sortProducts(products, "title")
);

console.log("\n=== TAHAP 5-8 SELESAI ===");