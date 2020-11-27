const segments = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1]
};
const svgPoints = {
    0: "1, 1  2,  0  8,  0  9, 1  8, 2  2, 2",
    1: "9, 1  10, 2  10, 8  9, 9  8, 8  8, 2",
    2: "9, 9  10, 10 10, 16 9, 17 8, 16 8, 10",
    3: "9, 17 8,  18 2,  18 1, 17 2, 16 8, 16",
    4: "1, 17 0,  16 0,  10 1, 9  2, 10 2, 16",
    5: "1, 9  0,  8  0,  2  1, 1  2, 2  2, 8",
    6: "1, 9  2,  8  8,  8  9, 9  8, 10 2, 10"
};
const svg = "http://www.w3.org/2000/svg";

function displayNumber() {
    const numberToDisplay = document.getElementById("numberToDisplay").value;
    const numbers = Array.from(numberToDisplay).map(Number);

    if (numbers.includes(NaN)) {
        alert("Please type only numbers");
    } else {
        drawNumbers(numbers);
    }
}

function drawNumbers(numbers) {
    const draw = document.getElementById("draw");
    draw.querySelectorAll("*").forEach((node) => node.remove());

    numbers.forEach((number) => {
        const newSvg = createSvg();

    const newDigit = document.createElementNS(svg, "g");
    const numberSegments = segments[number];
    numberSegments.forEach((currentSegment, index) => {
        if (currentSegment) {
            const newSegment = createSegment(index);
            newDigit.append(newSegment);
        }
    });
    newSvg.append(newDigit);
    draw.append(newSvg);
});
}

function createSvg() {
    const newSvg = document.createElementNS(svg, "svg");
    newSvg.setAttribute("width", "150px");
    newSvg.setAttribute("height", "150px");
    newSvg.setAttribute("viewBox", "0 -1 12 20");
    return newSvg;
}

function createSegment(index) {
    const newSegment = document.createElementNS(svg, "polygon");
    newSegment.setAttribute("points", svgPoints[index]);
    newSegment.style.fill = "red";
    return newSegment;
}
