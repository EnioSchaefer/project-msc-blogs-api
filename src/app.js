const express = require('express');
const userRoutes = require('./routers/User.routes');
const categoryRoutes = require('./routers/Category.routes');
const blogPostRoutes = require('./routers/BlogPost.routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);
app.use('/', userRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
