const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//findOneAndRemove
// Todo.findByIdAndRemove({_id: '5b7075df779bef2154a155d0'}).then((todo) => {
//   console.log(todo);
// });

//findByIdAndRemove
Todo.findByIdAndRemove('5b7075df779bef2154a155d0').then((todo) => {
  console.log(todo);
});
