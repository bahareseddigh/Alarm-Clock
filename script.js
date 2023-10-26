const selectMenu = document.querySelectorAll('select')
const timeBox = document.querySelector('.time')

for(let i = 23 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
}
for(let i = 59 ; i >= 0 ; i--){
    i = i < 10 ? '0' + i : i
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
}

setInterval( () => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    seconds = seconds < 10 ? '0' + seconds : seconds
    timeBox.innerHTML = `${hour}:${minute}:${seconds}`
    ;

}, 1000)