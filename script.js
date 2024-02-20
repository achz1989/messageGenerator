let Message ={
    messages: ['Message1','Message2','message3','message4','message5','message6'],
    generateMessage(){
        return this.messages[Math.floor(Math.random()*6)];
    }
}
console.log(Message.generateMessage());