# Rock Paper Scissors x99

## Project Overview

In this project, I built all of the logic needed for a more intense version of
Rock Paper Scissors (RPS). Rather than selecting just one of Rock, Paper, or Scissors - each player
will select three moves. Each move will consist of a type (Rock, Paper, or Scissors) as well
as a strength value. Each player will have 99 total points to use as strength between all
three of their moves. For example, an example set of moves might be:

- Move 1: Rock - 30 Strength Points
- Move 2: Rock - 60 Strength Points
- Move 3: Paper - 9 Strength Points

The strength for each move must be at least 1.

After each player's moves are chosen, they will compare moves in the order they were selected. If two moves have different types (for example, Rock vs Scissors), then normal RPS rules will apply (in this case, Rock beats Scissors).
However, if two types are the same, then the move with more strength will win. If both strength values are
equal, then a tie is declared.

The player that wins the majority of the three rounds will be the winner of the game.

To demo all of this functionality, try out a final version of this project, located <a href="https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/build-apis-project-1-rock-paper-scissors-x99/project/index.html" target="_blank">here</a>.

