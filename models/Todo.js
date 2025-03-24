const pool = require('../db')


async function findAllTodos() {
    const [rows] = await pool.query('SELECT * FROM todos');
    return rows;
}


async function createTodo(content) {
    const [result] = await pool.execute(
        'INSERT INTO todos (content, status) VALUES (?, ?)', 
        [content, 0]
    );
    return result.insertId;  
}

async function updateTodoStatus(id, status) {
    const query = 'UPDATE todos SET status = ? WHERE id = ?';
    return pool.query(query, [status, id]);
}
  
  module.exports ={ 

    findAllTodos,
    createTodo,
    updateTodoStatus

};