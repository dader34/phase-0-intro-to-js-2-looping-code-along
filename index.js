// Code your solutions in this file
function writeCards(sNames,eName){
    let wroteCards = []
    for(let x = 0;x<sNames.length;x++){
        wroteCards.push(`Thank you, ${sNames[x]}, for the wonderful ${eName} gift!`)
    }
    return wroteCards
}
function countDown(end){
    while(end >-1){
        console.log(end)
        end--
    }
}