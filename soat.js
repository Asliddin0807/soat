function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    console.log(h + ':' + m + ':' + s);
    setTimeout(startTime, 1000);
}
startTime()
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }