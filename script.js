let allPosts = [];

fetch("posts.json")
.then(res => res.json())
.then(data => {
  allPosts = data.reverse();
  showPosts(allPosts);
});

function showPosts(posts){
  let container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach(post=>{
    container.innerHTML += `
      <div class="card">
        <img src="${post.image}">
        <div class="card-content">
          <h2>${post.title}</h2>
          <p>${post.date}</p>
          <a href="${post.file}">Read More</a>
        </div>
      </div>
    `;
  });
}

// SEARCH
document.getElementById("search").addEventListener("input", e=>{
  let value = e.target.value.toLowerCase();
  let filtered = allPosts.filter(p => p.title.toLowerCase().includes(value));
  showPosts(filtered);
});

// CATEGORY
document.getElementById("category").addEventListener("change", e=>{
  let val = e.target.value;
  if(val==="all") showPosts(allPosts);
  else showPosts(allPosts.filter(p=>p.category===val));
});
