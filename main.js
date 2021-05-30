
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Sundar Pichai") {
		correct++;
}
	if (question2 == "44") {
		correct++;
}	
	if (question3 == "France") {
		correct++;
	}
	if (question4 == "Thomas Edison") {
		correct++;
}
	if (question5 == "Vitamin B2") {
		correct++;
}
if (question6 == "HyperText Markup Language") {
		correct++;
}
	if (question7 == "Thomas Edison") {
		correct++;
}	
	if (question8== "Vitamin B2") {
		correct++;
	}
	if (question9 == "Thomas Edison") {
		correct++;
}
	if (question10 == "France") {
		correct++;
}

	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var answers=["1.Sundar Pichai","2.44","3.France","4.Thomas Edison","5.Vitamin B2","6.HyperText Markup Language","7.Thomas Edison","8.Vitamin B2","9.Thomas Edision","10.France"];
	var score;

	if (correct > 0 && correct <=3) {
		score = 2;
	}

	if (correct >3 && correct <=6) {
		score = 1;
	}

	if (correct >6) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	document.getElementById("ans").innerHTML="Answers are:"
	document.getElementById("a").innerHTML=answers.join('\r\n');
	
	}
	
