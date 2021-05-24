setInterval(setClock, 1000)

const hourhand=document.querySelector('[data-hour-hand]')
const minutehand=document.querySelector('[data-minute-hand]')
const secondhand=document.querySelector('[data-second-hand]')

function setClock(){
    // pulling current date into a variable
    const currentDate = new Date()
    //setting our seconds and deviding them by 60(60 secs in a minute)
    const secondsRatio= currentDate.getSeconds()/60
    //settign our minutes and deviding them by 60 (60 mins in an hour)
    const minutesRatio= (secondsRatio + currentDate.getMinutes())/60
    //settign our hours and deviding them by 12(12 hours in a day)
    const hoursRatio= (minutesRatio +currentDate.getHours())/12

    // calling function element/ hand ratio/ rotation ratio
    setrotation(secondhand, secondsRatio)
    setrotation(minutehand, minutesRatio)
    setrotation(hourhand, hoursRatio)
}


// function to call our ratios and apply them to their elements
function setrotation(element,rotationratio ){
    element.style.setProperty('--rotation', rotationratio*360)

}

// will set our clock when page is loaded so it wont jump to the current time from rest position
setClock();


