const selectMenu = document.querySelectorAll('select')
const timeBox = document.querySelector('.time')
const setAlarmBtn = document.querySelector('button')
const content = document.querySelector('.content')

let alarmTime
const ringTone = new Audio('./assets/dadam.mp3')

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

    if(alarmTime == `${hour}:${minute}`){
        ringTone.play()
        ringTone.loop = true
    }


}, 1000)


setAlarmBtn.addEventListener('click' , () => {
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('لطفا زمان هشدار را به درستی مشخص کنید!')
    }
    content.classList.add('disable')
    setAlarmBtn.innerText = 'Clear Alarm'
})














