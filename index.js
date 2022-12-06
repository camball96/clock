const time = document.getElementById("time")
const btn = document.getElementById("btn")

function createTime() {
    var currentTime = new Date().toLocaleTimeString('en-AU', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})
    time.innerHTML = currentTime;
    setInterval(createTime, 1000)
}

function updateManually() {
    return createTime();
}



