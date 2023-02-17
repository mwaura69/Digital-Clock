setInterval (clockWork, 1000);

function clockWork() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h = h % 12;//converts the time to 12hr clock
    const ampm = h >= 12? 'AM': 'PM' //converts the time to am or pm
    m = m < 10? '0' + m : m; //adds a 0 to the single digit when clock is counting
    s = s < 10? '0' + s : s; //adds a 0 to the single digit when clock is counting
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("ampm").innerHTML = ampm;
}