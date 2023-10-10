const rl = required ("readLine-sync");
rl.createInterface ({
    input: process.studin,
    output: process.stdout
})
// Juego UNO
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"]
var type = ["comun", "Especial", "Comodin"]

var card = {
    color: null, //color puede ser amarrillo,azul,verde y rojo
    number: null,//Del 0 al 9
    type: null,// comun,especiales y comodines 
};

for (var ccolor = 0; ccolor < colors.length; ccolor++){
  
    for (var cNumber = 0; cNumber < 10; cNumber++){
    deck.push({color: colors[ccolor], number:cNumber, type:"comun"});
    }
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++){

    deck.push({color: colors[ccolor], number:cNumber1, type:"comun"});
    }
    deck.push({color: null, number:"+2", type:"Especial"});
    deck.push({color: null, number:"+2", type:"Especial"});
    deck.push({color: null, number:"B", type:"Especial"});
    deck.push({color: null, number:"B", type:"Especial"});
    deck.push({color: null, number:"R", type:"Especial"});
    deck.push({color: null, number:"R", type:"Especial"});
    

}
deck.push({color: null, number:"+4", type:"Comodin"});
deck.push({color: null, number:"+4", type:"Comodin"});
deck.push({color: null, number:"+4", type:"Comodin"});
deck.push({color: null, number:"+4", type:"Comodin"});
deck.push({color: null, number:"cc", type:"Comodin"});
deck.push({color: null, number:"cc", type:"Comodin"});
deck.push({color: null, number:"cc", type:"Comodin"});
deck.push({color: null, number:"cc", type:"Comodin"});

console.log(deck);

const Players = rl.question("Cuantos Jugadores seran", {})

console.log (Players)