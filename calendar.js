document.getElementById('addTask').addEventListener('click', function () {
    const task = prompt('Enter your task:');
    if (task) {
      const date = prompt('Enter the date (YYYY-MM-DD):');
      if (date) {
        // Save task to localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ date, task });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task added successfully!');
      }
    }
  });
  
  document.getElementById('viewTasks').addEventListener('click', function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks.length > 0) {
      alert('Tasks:\n' + tasks.map(t => `${t.date}: ${t.task}`).join('\n'));
    } else {
      alert('No tasks found.');
    }
  });
  
  document.getElementById('modifyTask').addEventListener('click', function () {
    const date = prompt('Enter the date of the task to modify (YYYY-MM-DD):');
    if (date) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskIndex = tasks.findIndex(t => t.date === date);
      if (taskIndex !== -1) {
        const newTask = prompt('Enter the new task:');
        if (newTask) {
          tasks[taskIndex].task = newTask;
          localStorage.setItem('tasks', JSON.stringify(tasks));
          alert('Task modified successfully!');
        }
      } else {
        alert('Task not found.');
      }
    }
  });
  
  document.getElementById('deleteTask').addEventListener('click', function () {
    const date = prompt('Enter the date of the task to delete (YYYY-MM-DD):');
    if (date) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks = tasks.filter(t => t.date !== date);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      alert('Task deleted successfully!');
    }
  });