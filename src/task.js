/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  let allTask = [];
  return class Task {
    constructor(description, priority, listId) {
      //your code here
      this.description = description;
      this.priority = priority
      this.id = id;
      id++

      this.listId = listId;
    }
    static all(){
      return allTask;
    }
  }

})()
