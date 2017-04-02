
function startClock() {
    updateClock();
    setInterval("updateClock()", 1000);
}

function updateClock() {
    node = document.getElementById("clock");  
    now = new Date();
    node.innerHTML = now.toLocaleString();
}