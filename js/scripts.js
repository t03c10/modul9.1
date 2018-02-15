var a, h;
function getTriangleArea (a, h) {
    if (a <= 0 || h <= 0) {
        console.log('One of input data is 0');
    } 
        else {
          return a*h/2;
        }
}
console.log('Triangle area is:' + getTriangleArea(10,0));
var triangle1Area = getTriangleArea(5,4);
var triangle2Area = getTriangleArea(11,9);
var triangle3Area = getTriangleArea(1,8);

console.log('Triangle 1 area is:' + triangle1Area +
 '\nTriangle 2 area is:' + triangle2Area + 
 '\nTriangle 3 area is:' + triangle3Area);

