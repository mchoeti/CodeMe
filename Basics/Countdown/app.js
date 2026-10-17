const countdown = () => {
    const now = new Date().getTime();
    // Nächster Heiliger Abend: ist er dieses Jahr schon vorbei, dann nächstes Jahr
    const year = new Date().getFullYear();
    let countDate = new Date(year, 11, 24).getTime();
    if (countDate < now) countDate = new Date(year + 1, 11, 24).getTime();
    const gap = countDate - now;

    // How much is time, mit der Miliseconds beginnen
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the things
    const textDay = Math.floor(gap / day);
    //console.log(textDay);
    const textHour = Math.floor((gap % day) / hour);
    //console.log(textHour);
    const textMinute = Math.floor((gap % hour) / minute);
    // console.log(textMinute);
    const textSecond = Math.floor((gap % minute) / second);
    // console.log(textSecond);

    // Update HTML 
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;


};

// Updating jede Sekunde
setInterval(countdown, 1000);
countdown();