const radius = 10; 

function calculateCircleArea(radius) {
    if (radius <= 0) {
        return "Радіус має бути більшим за 0.";
    }
    const area = Math.PI * Math.pow(radius, 2); 
    return area.toFixed(2); 
}

function displayCircleArea() {
    const result = calculateCircleArea(radius);
    const div4 = document.querySelector(".div-4-text");
    if (div4) {
        div4.innerHTML = `- Get the hell out of here, be a goddamn man<br>
        - Arthur... what is the area of a circle with radius ${radius}<br>
                           - Area of ​​a circle with radius ${radius}: ${result}<br>
                           - You are my brother<br>
                           - I know`;
    } 
}

displayCircleArea();