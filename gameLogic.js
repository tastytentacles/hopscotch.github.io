var can, con;
var dots = [];

function init() {
    can = document.getElementById("playSpace");
    con = can.getContext("2d");
    
    for (let i = 0; i < 32; i++) {
        dots.push([
            Math.random() * 256 + 128,    // x pos
            Math.random() * 256 + 128,    // y pos
            Math.random() * 12 - 6, // x speed
            Math.random() * 12 - 6  // y speed
        ]);
    }

    draw();
    logic();
}

function logic() {
    dots.forEach(e => {
        e = add_gravity(e);

        e = apply_speed(e);
    });

    window.setTimeout(logic, 60);
}

function draw() {
    con.fillStyle = "#000";
    con.fillRect(0, 0, 512, 512);

    con.fillStyle = "#FFFFFF";

    dots.forEach(e => {
        // con.fillRect(e[0] - 4, e[1] - 4, 8, 8);

        con.beginPath();
        con.arc(e[0], e[1], 4, 0, 2 * Math.PI);
        con.fill();
    });

    window.requestAnimationFrame(draw);
}