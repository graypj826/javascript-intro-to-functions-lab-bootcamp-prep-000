var uppercase = "HELLO!"

uppercase.toUpperCase()===
uppercase

var lowercase = "hello!"

lowercase.toLowerCase()===
lowercase

var mixedCase = "Hi there!"

mixedCase.toLowerCase() ===
mixedCase

mixedCase.toUpperCase()===
mixedCase




function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logshout(string){
  console.log(string.toUpperCase())
  return
}

function logwhisper(string){
  console.log(string.toLowerCase())
  return
}

function sayHiToGrandma(string){
  if(string === lowercase){
    return "I can't hear you!"
  }
  else if (string === uppercase){
    return "YES INDEED!"
  }
  
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
