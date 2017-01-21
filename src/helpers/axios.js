
let Todos=[{text: "mow the lawn"},{text: "feed the dog"}];
const axios = {};

axios.get = () => {
  return new Promise(function(resolve, reject){
    resolve(Todos);
  });
}

axios.post = (obj) => {
  return new Promise((resolve, reject) => {
    if( typeof obj === 'object' ){
    Todos.push(obj);
    resolve(Todos);
  }else{
    let err = new Error("post only takes an object as the first argument")
    reject(err);
  }
});
}

axios.delete = (index) => {
  return new Promise( (resolve, reject) => {
    Todos = [...Todos.slice(0,index),...Todos.slice(index+1)];
    resolve(Todos);
  })
}

axios.put = (ind, text) => {
  return new Promise((resolve, reject) => {
    Todos[ind].text=text;
    resolve(Todos);
  })
}

export default axios;
