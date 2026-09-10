// BAGIAN 1: JS Fundamentals & Problem Solving
console.log("=== BAGIAN 1: JS FUNDAMENTALS ===");

// Latihan 1.1: Menghitung Harga Setelah Diskon
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
console.log("Latihan 1.1 - Harga Diskon Laptop:", calculateDiscountedPrice(1000, 10)); // Output: 900

// Latihan 1.2: Menaikkan Tingkat Kesulitan (Array of Objects dengan for...of)
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cartItems) {
  const result = [];
  for (const item of cartItems) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({
      title: item.title,
      originalPrice: item.price,
      finalPrice: finalPrice
    });
  }
  return result;
}
console.log("Latihan 1.2 - Cart Setelah Diskon:", applyDiscounts(cart));


// BAGIAN 2: Data Representation & Array of Objects
console.log("\n=== BAGIAN 2: DATA REPRESENTATION ===");

// Dataset Awal Produk (Minimal 30 produk sesuai instruksi jobsheet)
const initialProducts = Array.from({ length: 30 }, (_, index) => {
  const id = index + 1;
  const categories = ["laptops", "phones", "audio", "accessories"];
  return {
    id: id,
    title: `Product ${id}`,
    price: Math.floor(Math.random() * 900) + 100, // Harga 100 - 1000
    category: categories[id % categories.length],
    stock: Math.floor(Math.random() * 20) // Stok 0 - 20
  };
});

// Latihan 2.1: Mencari Produk berdasarkan ID menggunakan find()
function findProductById(products, id) {
  return products.find(p => p.id === id);
}
console.log("Latihan 2.1 - Cari Produk ID 5:", findProductById(initialProducts, 5));

// Latihan 2.2: Stok Menipis (stok < 10) menggunakan filter()
const lowStockProducts = initialProducts.filter(p => p.stock < 10);
console.log("Latihan 2.2 - Produk Stok < 10:", lowStockProducts);

// Latihan 2.3: Mengubah Data Tanpa Mutasi (Immutability) menggunakan map & spread
function updateStock(products, id, newStock) {
  return products.map(p => 
    p.id === id ? { ...p, stock: newStock } : p
  );
}
const updatedProducts = updateStock(initialProducts, 1, 99);
console.log("Latihan 2.3 - Update Stok ID 1 jadi 99 (Array Baru):", findProductById(updatedProducts, 1));
console.log("Latihan 2.3 - Cek Array Asli (Stok Tetap):", findProductById(initialProducts, 1));

// BAGIAN 3: Nested Data
console.log("\n=== BAGIAN 3: NESTED DATA ===");

// Dataset Kompleks (Nested Array & Object)
const products = [
  {
    id: 1,
    title: "Laptop Pro",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "Alya", rating: 5, comment: "Sangat bagus dan cepat!" },
      { user: "Budi", rating: 4, comment: "Worth it untuk harga segini." }
    ]
  },
  {
    id: 2,
    title: "Smartphone X",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "Cici", rating: 4, comment: "Kamera jernih sekali." },
      { user: "Dedi", rating: 5, comment: "Performa mantap!" },
      { user: "Eka", rating: 3, comment: "Baterai standar." }
    ]
  },
  {
    id: 3,
    title: "Wireless Headphone",
    price: 150,
    rating: 4.8,
    stock: 5,
    category: "audio",
    tags: ["audio", "gadget"],
    dimensions: { width: 15, height: 20, depth: 8 },
    reviews: [
      { user: "Fajar", rating: 5, comment: "Suara bass sangat jos!" }
    ]
  }
];

// 1. Ambil semua tag dari seluruh produk
const allTagsNested = products.map(p => p.tags);
console.log("3.1 - Ambil semua tags (masih nested):", allTagsNested);

// 2. Cari produk berdasarkan tag tertentu
function findProductsByTag(productList, tag) {
  return productList.filter(p => p.tags.includes(tag));
}
console.log("3.2 - Produk dengan tag 'electronics':", findProductsByTag(products, "electronics"));

// 3. Hitung jumlah review pada setiap produk
const reviewCounts = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));
console.log("3.3 - Jumlah Review Per Produk:", reviewCounts);

// 4. Kumpulkan review yang ratingnya 5 dari seluruh produk
const rating5Reviews = products.flatMap(p => p.reviews).filter(r => r.rating === 5);
console.log("3.4 - Semua Review Rating 5:", rating5Reviews);

// 5. Hitung rata-rata rating dari array reviews secara manual
const averageReviewsRating = products.map(p => {
  const total = p.reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = p.reviews.length > 0 ? total / p.reviews.length : 0;
  return {
    id: p.id,
    title: p.title,
    calculatedAverageRating: Number(avg.toFixed(2))
  };
});
console.log("3.5 - Rata-rata Rating Manual Per Produk:", averageReviewsRating);

// 6. Produk dengan jumlah review terbanyak
const mostReviewedProduct = products.reduce((prev, current) => 
  (prev.reviews.length > current.reviews.length) ? prev : current
);
console.log("3.6 - Produk Review Terbanyak:", mostReviewedProduct.title);

// 7. Kumpulkan seluruh nilai rating dari semua review menjadi satu array datar
const allRatingsFlat = products.flatMap(p => p.reviews.map(r => r.rating));
console.log("3.7 - Seluruh Nilai Rating Review (Flat Array):", allRatingsFlat);

// BAGIAN 4: Flattening Data
console.log("\n=== BAGIAN 4: FLATTENING DATA ===");

// Latihan 4.1: Ambil seluruh tags menggunakan flatMap()
const uniqueTagsFlatMap = products.flatMap(p => p.tags);
console.log("Latihan 4.1 - Seluruh Tags (flatMap):", uniqueTagsFlatMap);

// Latihan 4.2: Ambil seluruh comment dari semua review menjadi array of strings
const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log("Latihan 4.2 - Seluruh Comment Review:", allComments);