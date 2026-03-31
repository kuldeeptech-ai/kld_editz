let allPosts = [];

fetch("posts.json")
  .then(res => res.json())
  .then(data => {
    allPosts = data.reverse();
    showPosts(allPosts);
  });

function showPosts(posts) {
  let container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach(post => {
    container.innerHTML += `
      <div class="card">
        <img src="${post.image}">
        <h2>${post.title}</h2>
        <p>${post.date}</p>
        <a href="${post.file}">Read More</a>
      </div>
    `;
  });
}

// 🔍 Search
document.getElementById("search").addEventListener("input", e => {
  let value = e.target.value.toLowerCase();
  let filtered = allPosts.filter(p => p.title.toLowerCase().includes(value));
  showPosts(filtered);
});

// 🏷️ Category Filter
document.getElementById("category").addEventListener("change", e => {
  let value = e.target.value;

  if (value === "all") {
    showPosts(allPosts);
  } else {
    let filtered = allPosts.filter(p => p.category === value);
    showPosts(filtered);
  }
});