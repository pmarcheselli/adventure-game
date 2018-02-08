# adventure-game
Text based adventure game programmed in JS<br>
OBJECTIVE: User has to guess location of hidden treasure on a 3x3 grid. <br>

Game setup:<br>
1. var for user start location <br>
2. var for user current location <br>
3. game board <br>
  A. var for each grid block<br>
  B. track by x & y coordinates<br>
4. var for each direction (N, E, W, S)<br>
5. var for previous user location<br>
6. var for user namer<br>
7. var treasureFound = false<br>
  
Game play:<br>
1. start with a prompt, telling user about adventure<br>
  A.collect their name<br>
2. while treasureFound<br>
  A. ask what direction<br>
  B. tell user if treasure is in their new location<br>
  C. check that they've entered a valid direction<br>
  D. tell user if they're closer to treasure<br>
  E. only prompt for valid directions<br>
  F. make sure their move is still within the grid<br>
  G. do math, figure user's current location <br>
      1.(change x or y value)<br>

Game ends:<br>
1. user enters treasure's location<br>
  A. treasureFound = true<br>
  B. output to user, tell them they won!<br>
  C. give option to retry<br>
  D. reset all vars to starting value<br>
