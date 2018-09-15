function triangle(){
  if (itsATriangle(a, b, c)) {
    return triangleDesign(a, b, c)
  } else {
    return "These sides do not make a triangle.";
  }
 };

 var triangleDesign = function(a, b, c){
   if (a===b && b===c && c===a) {
     return "equilateral";
   } else if (a===b || a===c || c===b) {
     return "isosceles";
   } else {
     return "scalene";
   }
 };
