#!/bin/bash

# Rock Paper Scissors, you against the computer.
# TODO: Put your name here: Christian Rogers

#script global variables to hold choices
computer_choice=-1
user_choice=-1

# generates the computer response
compute_computer_choice () {
	computer_choice=$(( ( RANDOM % 3 ) + 1 ))
	#  TODO: Write the logic to print the computer's choice after it is generated.
	#  This will be a series of if and else if statements checking for each possible computer choice.
	if (( computer_choice == 1 )); then
		echo "Computer chose Rock"
	elif (( computer_choice == 2 )); then
		echo "Computer chose Paper"
	elif (( computer_choice == 3 )); then
		echo "Computer chose Scissors"
	fi

}

# prints the users selection
print_user_choice () {
	#  TODO: Write the logic to print the player's  response after it is selected by the player.
	#  This will be a series of if and else if statements checking for each possible user choice, like the computer choice.
	if (( user_choice == 1 )); then
		echo "You chose Rock"
	elif (( user_choice == 2 )); then
		echo "You chose Paper"
	elif (( user_choice == 3 )); then
		echo "You chose Scissors"
	fi
}

# decide who won the round.
compute_winner () {
	# Easiest to check if it is a tie first.  Then check every other possible combination of choices
	if (( user_choice == computer_choice )); then
               echo "You tied.  Try again"
        elif (( user_choice == 1 && computer_choice == 3 )); then #Rock beats Scissors
               echo "You win!"
		elif (( user_choice == 2 && computer_choice == 1 )); then #Paper beats Rock
			   echo "You win!"
		elif (( user_choice == 3 && computer_choice == 2 )); then #Scissors beats Paper
			   echo "You win!"
		else 
			   echo "Computer wins.  Try again"

	# TODO: Finish the series of elif statements to check the remaining choices of player and computer.  
		

        fi
}

# looping in while loop until 4 is pressed and then if breaks out of loop.

# TODO: write loop logic which then will end with the done statement below.
playing=true
while $playing; do
	# TODO: Prompt player for choices and read in player selection.
	read -p "Enter your choice (1=Rock, 2=Paper, 3=Scissors, 4=Done): " user_choice
	# Check for "Done" selection and handle that input
	if (( user_choice == 4 )); then
		playing=false
		break
    elif (( user_choice >= 1 && user_choice <= 3 )); then
		compute_computer_choice
		print_user_choice
		compute_winner
	else
		echo "Invalid choice, please try again using numbers 1 through 4"
	fi
	

done

echo "Thanks for playing, goodbye."
