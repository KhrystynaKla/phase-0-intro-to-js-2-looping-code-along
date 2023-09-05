const gifts = ['teaddy bear', 'drone', 'doll']
function wrapGifts(gifts){
    for (let i = 0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts)

function writeCards(arrayOfNames, eventName, arrayOfMessages=[]){
    for (let i=0; i< arrayOfNames.length; i++){
        arrayOfMessages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return arrayOfMessages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number){
    while(number>=0){
        console.log(number--)
    }
}
countDown(10)