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
//      alert(return "equilateral");
//    } else if (a===b || a===c || c===b) {
//      alert(return "isosceles");
//    } else {
//      alert(return "scalene");
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

              if (a==b && b==c) {
              result.innerHTML = "This is an equilateral triangle");
              } else if (a==b || a==c || c==b) {
                result.innerHTML = "This is an isosceles triangle";
              } else {
                result.innerHTML = "This is a scalene triangle";
              }
            }
