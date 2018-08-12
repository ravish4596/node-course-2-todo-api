const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b6ecada745d1b2d409b6bab';

// if(!ObjectID.isValid(id)) {
//   console.log('ID Not Valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: ', todo);
// });

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User Not Found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log('Unable to fetch user', e);
});
