const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample blog posts data
let blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post.' },
];

// API route to get all blog posts
app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

// API route to get a specific blog post
app.get('/api/posts/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

// API route to create a new blog post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: blogPosts.length + 1,
    title,
    content,
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
