let posts = []

const getPosts = async () => {
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()

  blogPost(posts)
}

const blogPost = (posts) => {
  posts.forEach((post) => {
    document.getElementById('posts').innerHTML += `<div class="content"><img src='${post.image}' class="image"/><div class="information"><div class="title">${post.title}</div> <div class="text">${post.text}</div></div></div>`
  })
}

window.addEventListener("click", (event) => {

  if (event.target.tagName === 'IMG') {
    document.getElementById('imageModal').innerHTML = `<div id="modalImage"><img src="${event.target.src}"/></div>`
    document.getElementById('imageModal').style.display = "block"
  } else {
    document.getElementById('imageModal').style.display = "none"
  }
})
