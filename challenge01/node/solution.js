const fs = require('fs');
const readline = require('readline');

async function solution() {
  const fileStream = fs.createReadStream('users.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let user = {};
  let i = 0;
  for await (const line of rl) {
    if(line){
      let info = line.split(" ");
      info.map((val) => {  
        let keyval = val.split(":"); 
        user[keyval[0]] = keyval[1];  
      } )  

    }else{
      if( ['usr','eme','psw','fll','age','loc'].every( (c) =>  typeof user[c] !== 'undefined'  )){
        console.log(++i,user.usr);
      }
      user = {};    
    }
  }
}

solution();