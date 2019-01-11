

document.querySelector('.box1').addEventListener('click', function(e){
  console.log("this is box one");
});
document.querySelector('.box2').addEventListener('click', function(e){
  console.log("this is box two");
});
document.querySelector('.box3').addEventListener('click', function(e){
  console.log("this is box three");
});
document.querySelector('.box4').addEventListener('click', function(e){
  console.log("this is box four");
  // e.stopImmediatePropagation();
  e.stopPropagation();
  // e.preventDefault();`
   
});