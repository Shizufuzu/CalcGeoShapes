var select;
let sides = {
    a : 0,
    b : 0,
    c : 0,
    s : 0,
    area : 0
}

document.addEventListener('DOMContentLoaded', () => {
    document    
        .getElementById('geoShapesList')
        .addEventListener('input', handleSelect);
});
function handleSelect(ev) {
    select = ev.target; // like getElementByID('geoShapesList')
    switch (select.value) {
        case "triangle":
            document.getElementById("triangleSelected").style.display="block";
            document.getElementById("squareSelected").style.display="none";
            break;
        case "square":
            document.getElementById("squareSelected").style.display="block";
            document.getElementById("triangleSelected").style.display="none";
            break;
        default:
            document.getElementById("triangleSelected").style.display="none";
            document.getElementById("squareSelected").style.display="none";
        }
}
function calculateShapes() {
    switch (select.value) {
        case "triangle":
            sides.a = document.getElementById('trSide1').value;
            sides.b = document.getElementById('trSide2').value;
            sides.c = document.getElementById('trSide3').value;
            sides.s = (sides.a + sides.b + sides.c) / 2;
            console.log(sides.s);
            //sides.area = Math.sqrt(s * (s - Number(sides.a)) * (s - Number(sides.b)) * (s - Number(sides.c)));
            break;
        case "square":
            sides.a = document.getElementById('sqSide1').value;
            sides.b = document.getElementById('sqSide2').value;
            sides.area = sides.a * sides.b;
            break;
        default:
            sides.area = NaN;
    }
    document.getElementById('result').innerHTML = sides.area.toFixed(2) + " x²";               
}