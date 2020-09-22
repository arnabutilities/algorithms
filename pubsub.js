// class Event{
//     eventObject = {};
//     constructor(eventType, callback){
//         this.eventObject[eventType] = callback;   
//     }

//     on(eventType, callback){

//         if(callback && typeof callback === 'function'){
//             this.eventObject[eventType] = callback;
//         }
//         this.eventObject[eventType]();
//     }
// }

// HTMLElement.prototype = new Event('click',() => {});
String.prototype.arnab = () => {return Array.reverse(this.split(''))}