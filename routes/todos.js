const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) =>{
    const todos = await Todo.findAllTodos();

    todos.forEach(todo => {
        todo.completed = todo.status === 1; 
    });
    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req,res) =>{
    res.render('create',{
        title:'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const { content } = req.body;
    const id = await Todo.createTodo(content);
    res.json({ id, content });
  });

router.post('/complete', async (req,res) => {
    const { id, completed } = req.body;
    const isCompleted = !!completed;
    await Todo.updateTodoStatus(id, isCompleted);

    res.json({ success: true });

})

module.exports = router