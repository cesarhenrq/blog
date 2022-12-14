const addPost = async () => {
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "title": `${document.getElementById('title').value}` ,
      "author": `${document.getElementById('author').value}`,
      "image": `${document.getElementById('image').value}`,
      "text":  `${document.getElementById('text').value}`
    })
  });
}

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  addPost()
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('image').value = ''
  document.getElementById('text').value = ''
  
})
