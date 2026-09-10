const container = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortBtn = document.getElementById("sort-btn");
const totalStats = document.getElementById("total-stats");

let allProducts = []; 
let isSorted = false;

const renderProducts = (dataToRender) => {
    const totalItems = dataToRender.reduce((total) => total + 1, 0);
    totalStats.innerText = `Total Produk: ${totalItems}`;

    const htmlContent = dataToRender.map(({ title, price, category, thumbnail, description }) => {
        return `
            <div class="card">
                <img src="${thumbnail}" alt="${title}">
                <h3>${title}</h3>
                <span class="category-badge">${category}</span>
                <p>${description.substring(0, 50)}...</p>
                <p><strong>Harga: $${price}</strong></p>
            </div>
        `;
    }).join("");
    
    container.innerHTML = htmlContent;
};

const populateCategories = (data) => {
    const categories = [...new Set(data.map(item => item.category))];
    categories.forEach(cat => {
        categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
};

const applyFilters = () => {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let filtered = allProducts.filter(product => {
        const matchKeyword = product.title.toLowerCase().includes(keyword);
        const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchKeyword && matchCategory;
    });

    if (isSorted) {
        filtered = filtered.sort((a, b) => a.price - b.price);
    }

    renderProducts(filtered);
};

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortBtn.addEventListener("click", () => {
    isSorted = !isSorted; 
    sortBtn.innerText = isSorted ? "Hapus Urutan" : "Urutkan: Termurah ke Termahal";
    applyFilters();
});

async function fetchProducts() {
    try {
        container.innerHTML = "<p>Sedang memuat data...</p>"; 
        
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        
        allProducts = data.products; 
        
        populateCategories(allProducts);
        renderProducts(allProducts); 
    } catch (error) {
        container.innerHTML = "<p style='color:red;'>Wah, gagal mengambil data nih! Coba cek koneksimu.</p>";
        console.error(error);
    }
}

fetchProducts();
