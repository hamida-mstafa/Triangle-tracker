// function triangle(){
//   if (itsATriangle(a, b, c)) {
//     return triangleDesign(a, b, c)
//   } else {
//     return "These sides do not make a triangle.";
//   }
//  };
//
//  var triangleDesign = function(a, b, c){
//    if (a===b && b===c && c===a) {
//      return "equilateral";
//    } else if (a===b || a===c || c===b) {
//      return "isosceles";
//    } else {
//      return "scalene";
//    }
//  };
//
//  var itsATriangle = function(a, b, c) {
//    return a <= (b + c) && b <= (c + a) && c <= (a + b)
//  };
//
//  var itsATriangle = function(a, b, c) {
//    return a <= (b + c) && b <= (c + a) && c <= (a + b)
//  };
//  $(document).ready(function() {
//   $("form#triangle").submit(function(event) {
//         var a = parseInt($("input#a").val());
//         var b = parseInt($("input#b").val());
//         var c = parseInt($("input#c").val());
//         var result = triangle(a, b, c);
//
//             a = parseInt($("input#a").val(""));
//             b = parseInt($("input#b").val(""));
//             c = parseInt($("input#c").val(""));
//                 $("#result").append(result);
//                 event.preventDefault();
//               });
//             });
function triangles() {
  // console.log('clickes')
  var a = document.querySelector('#a').value;
  var b = document.querySelector('#b').value;
  var c = document.querySelector('#c').value;
  var result = document.querySelector('#result')
