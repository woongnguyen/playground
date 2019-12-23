

const task = {
  task:[
    {text:'text 1', completed:true},
    {text:'text 2', completed: false},
    {text:'text 3', completed:true}
  ],
  getTaskToDo(){
    const taskToDo = this.task.filter( (taskk) => taskk.completed ===false )
    return taskToDo
  }
}

console.log(task.getTaskToDo())