console.log("JOBSHEET TAHAP 14-17");
// BAGIAN 14: QUEUE

console.log("\nBAGIAN 14: QUEUE");

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const requestQueue = new Queue();

requestQueue.enqueue("Request A");
requestQueue.enqueue("Request B");
requestQueue.enqueue("Request C");

console.log("Isi Queue:", requestQueue.items);

console.log(
    "Request berikutnya:",
    requestQueue.peek()
);

console.log(
    "Diproses:",
    requestQueue.dequeue()
);

console.log(
    "Queue setelah dequeue:",
    requestQueue.items
);

// BAGIAN 15: RECURSION
console.log("\n=== BAGIAN 15: RECURSION ===");

function countdown(n) {
    if (n <= 0) {
        console.log("Selesai");
        return;
    }

    console.log(n);

    countdown(n - 1);
}

countdown(5);

// LATIHAN 15.1
const categories = [
    {
        name: "Electronics",
        children: [
            {
                name: "Laptop",
                children: []
            },
            {
                name: "Phone",
                children: []
            }
        ]
    }
];

function printCategories(categories, depth = 0) {
    for (const category of categories) {

        console.log(
            " ".repeat(depth) + category.name
        );

        if (category.children.length > 0) {
            printCategories(
                category.children,
                depth + 1
            );
        }
    }
}

console.log("Daftar kategori:");
printCategories(categories);

// BAGIAN 16: ALGORITHM COMPLEXITY
console.log("\n=== BAGIAN 16: ALGORITHM COMPLEXITY ===");

function linearSearchWithSteps(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

const numbers = [];

for (let i = 1; i <= 10000; i++) {
    numbers.push(i);
}

console.log(
    "Linear Search:",
    linearSearchWithSteps(numbers, 10000)
);

function binarySearchWithSteps(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {

        steps++;

        const mid = Math.floor(
            (left + right) / 2
        );

        if (array[mid] === target) {
            return {
                index: mid,
                steps: steps
            };
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

console.log(
    "Binary Search:",
    binarySearchWithSteps(numbers, 10000)
);

function countPairs(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                count++;
            }
        }
    }

    return count;
}

console.log(
    "Contoh O(n²):",
    countPairs([1, 2, 2, 3, 3, 3])
);

// BAGIAN 17: DOM MANIPULATION

console.log("\n=== BAGIAN 17: DOM MANIPULATION ===");

function renderProducts(products) {

    const container = document.querySelector("#product-list");

    if (!container) {
        console.log(
            "Element #product-list tidak ditemukan."
        );
        return;
    }

    container.innerHTML = "";

    for (const product of products) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}

const domProducts = [
    {
        title: "Laptop A",
        category: "laptops",
        price: 1000,
        rating: 4.5
    },
    {
        title: "Laptop B",
        category: "laptops",
        price: 1200,
        rating: 4.7
    },
    {
        title: "Phone A",
        category: "phones",
        price: 800,
        rating: 4.2
    },
    {
        title: "Laptop C",
        category: "laptops",
        price: 1500,
        rating: 4.8
    },
    {
        title: "Headphone A",
        category: "audio",
        price: 300,
        rating: 4.0
    }
];

if (typeof document !== "undefined") {
    renderProducts(domProducts);
}

console.log("\n=== TAHAP 14-17 SELESAI ===");