// // NOTE: Original trial class code
// $("input").keypress(function(event) {
//   if (event.which === 13 && $(this).val() !== "") {
//     var todoItem = $(this).val();
//     $("ul").append(
//       "<li>" +
//         todoItem +
//         "<span>" +
//         "<i class='far fa-trash-alt'></i>" +
//         "</span>" +
//         "</li>"
//     );
//     $("input").val("");
//   }
// });

// $("ul").on("click", "li", function() {
//   $(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function(event) {
//   $(this)
//     .parent()
//     .remove();
// });


const todourl= 'http://localhost:3000/todos'

$(document).ready(function(){
  // passing get request from our url
  $.ajax({
    url: todourl,
    method: "GET"
  })
  // 
  .done(function(dataObj){
    $('ul').empty();
    dataObj.map(function(todo){
      let completed = todo.isComplete ? 'class="completed"': "";
      $('ul').append(
        `<li data-id=${todo.id} ${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      );
    })
  })
  .fail(function(errorObj){
    console.error('Issues getting create datafrom back end API ', errorObj)
  })
})


$("input").keypress(function(event) {
  if(event.which === 13 && $(this).val() !==''){
  var todoItem ={ 
    description: $(this).val()
  }
$.ajax({
  url: todourl, // what is the url (path) we need to trigger server API?
  method: "POST", // What method? GET, POST, PUT, etc...
  data: todoItem
})
.done(function(newTodo){
  // assigning valus to isComplete 
let completed = newTodo.isComplete ? 'class= "completed"': "";
$('ul').append(
  `<li data-id=${newTodo.id}${completed}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
);
 $('input').val("");
})
// .fail(function(errorObj){
//   console.error('Issues getting create datafrom back end API ', errorObj)
// })
}
});

// toggle completed class update
$('ul').on('click','li', function(){
  let self = this;
  let thisToDoId= $(this).data('id')
  $.ajax({
    url: `${todourl}/${thisToDoId}`,
    method: 'PUT'
  })
  .done(function(){
    $(self).toggleClass('completed');
  })
  .fail(err=> console.log(`Issues with trying to update class: ${err}`))
})

$('ul').on('click','span', function(event){
  event.stopPropagation();
  var self = this; //refering to span

  var thisId= $(this).parent().data('id'); // this= span .parent()= li.data('id')=id
  var url= `${todourl}/${thisId}`// = 'http://localhost:3000/todos/:id'

  $.ajax({
    url: url,
    method: 'DELETE',
  })
  .done(function(){
    $(self).parent().remove();// span->li= remove list item
  })
  .fail(function(err){
    console.log('Delete failed with error ', err)
});
})

