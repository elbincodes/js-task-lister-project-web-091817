/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  let allList = [];
  return class List {
    constructor(title) {

      this.title = title;
      this.id = id;
      id++
      allList.push(this);

      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?

    }
    static all(){
      return allList;
    }


  }

})()
