// Define the size of the game play area
var maxX = 2
var maxY = 2

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Flag that controls loop 
var treasureFound = false 

// Get user's name
var name = prompt("Welcome brave adventurer! What are you called?")
console.log(name)

// Function to start game on click
function myFunction() {
  
  while(!treasureFound){
    alert("Ok, " + name + " get ready to start the game!")
    
    var direction = prompt("Which direction would you like to go in? (north, south, east, west)")

    console.log(direction)

    // tmp vars, only used for checking validity of new user location after move
    var newX 
    var newY

    // When new direction entered:
    // see what new user location would be
    // check if new user location is valid
    // check if new user location is treasure

    if(direction == "north"){
      newX = userX 
      newY = userY + 1
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX 
        userY = newY

      }else {
       console.log("There is a forbidding mountain range in that direction, you cannot go") 
      }

    }else if(direction == "east"){
      newX = userX + 1
      newY = userY 
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX 
        userY = newY
      }else {
       console.log("There is a forbidding mountain range in that direction, you cannot go") 
      }

    }else if(direction == "south"){
      newX = userX 
      newY = userY - 1 
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX 
        userY = newY
      }else {
       console.log("There is a forbidding mountain range in that direction, you cannot go") 
      }

    }else if(direction == "west"){
      newX = userX - 1
      newY = userY
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX 
        userY = newY
      }else {
       console.log("There is a forbidding mountain range in that direction, you cannot go") 
      }

    }else {
     console.log("please enter a real direction") 
    }

    console.log("The user's x is: " + userX)
    console.log("The user's y is: " + userY)

    // see if user location matches treasure
    if(userX == treasureX && userY == treasureY){
      console.log("Hooray! You found the treasure!")
      alert("Hooray! You won! You found the treasure!")
     treasureFound = true 
    }
  }

}