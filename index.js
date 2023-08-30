

const names = [];

function writeCards(names, event = "birthday") {
    
    let messages= [];

    for (let i = 0; i < names.length; i++) {

      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      
    }
   return messages;
}
console.log(writeCards(["john", "george", "sam"], "graduation"));


function countDown(Integer){

Integer = 10
while (Integer >= 0){
  console.log(Integer--);
}

}
