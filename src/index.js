document.addEventListener('DOMContentLoaded', () => {
  // your code here ....
  const listForm = document.getElementById('create-list-form');

  listForm.addEventListener('submit',function(ev){
    ev.preventDefault();
    let listTitle = document.getElementById('new-list-title').value;
    document.getElementById('new-list-title').value = '';
    let newList = new List(listTitle);
    const {id, title} = newList;
    let dropDown = document.getElementById('parent-list');
    let element = document.createElement("option");
    element.setAttribute("data-id", id);
    element.setAttribute("data-title", title);


    let node = document.createTextNode(`${newList.title}`);
    element.appendChild(node);
    dropDown.appendChild(element);

    let lists = document.getElementById('lists');
    let div = document.createElement("div");
    let button = document.createElement("button");

    lists.appendChild(div)
    div.appendChild(button);
    let x = document.createTextNode('X');


    let title2 = document.createElement("h2");
    let node2 = document.createTextNode(`${newList.title}`);

    button.appendChild(x);
    title2.appendChild(node2);
    div.appendChild(title2);

  });

  const taskForm = document.getElementById('create-task-form');

  taskForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    let description = document.getElementById("new-task-description").value;
    let priority = document.getElementById("new-task-priority").value;


  let selectedList = parseInt(document.getElementById("parent-list").selectedOptions[0].dataset.id)

  let newTask = new Task(description, priority, selectedList)

  })


});


// <div><button>x</button> <h2>node</h2> </div>
