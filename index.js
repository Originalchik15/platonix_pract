const express = require('express');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');
const path = require('path');
const pool = require('./db');
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(todoRoutes);

async function start() {
  try {
    const connection = await pool.getConnection();
    console.log('Успешное подключение к БД');
    connection.release();
    app.listen(PORT, () => {
      console.log(`Port = ${PORT}`);
    });
  } catch (e) {
    console.error('Ошибка подключения к БД:', e);
  }
}

start();
