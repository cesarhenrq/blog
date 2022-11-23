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
