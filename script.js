const API_BASE = "https://punjab-organics.onrender.com";

// function to get products from backend
async function getProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  const data = await res.json();

  const container = document.getElementById("products");

  container.innerHTML = data
    .map(
      (p) => `
      <div>
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `
    )
    .join("");
}

// run function when page loads
getProducts();