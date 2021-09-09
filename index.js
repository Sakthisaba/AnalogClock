/* setInterval funtion will works every 1000 millisecond */
setInterval(setClock,1000)
 /*the elements in html (which we are going to modify) */
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {

    /*Below calculation will blow your mind ,but dont worry!
      we cant rotate a clock's hand by numbers,So we should convert them to degree to make them to rotate
      We divide seconds by 60 inorder to get 60 different angles to rotate seconds hand in clock 
      Repeat it for minutes and hours 
    */
   /*NOTE:We added secondsRatio in minutesRatio and added minutesRatio in HoursRation,
     But why?????
     Becoz it helps hours hand and minutes hand to move gradually */
 
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    /*The below function will call setRotation function and 
      passes two parameter 1.Element that we need to change in HTML,CSS
                           2.Ratio of the hour-hand,minute-hand,secondhand */
    setRotation(minuteHand,minutesRatio)
    setRotation(secondHand,secondsRatio)
    setRotation(hourHand,hoursRatio)

}
function setRotation(element,rotationalRatio){
    /*This function gets two input and 
      it will change the property of the element by adding degree*/
    element.style.setProperty('--rotation',rotationalRatio * 360)
}
setClock()