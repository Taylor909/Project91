player1_name=localStorage.getItem("playerName1");
player2_name=localStorage.getItem("playerName2");

var player1_score=0;
var player2_score=0;

var question_turn="player1";
var Answer_turn="player2";

document.getElementById("player1").innerHTML=player1_name+" : ";
document.getElementById("player2").innerHTML=player2_name+" : ";

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name; 

function start(){
number1=document.getElementById("number_1").value;
number2=document.getElementById("number_2").value;
actual_answer=parseInt(number1)*parseInt(number2);
console.log("Actual Answer");
question_number="<h4 id='word_display'>"+number1+" X "+number2+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number_1").value="";
document.getElementById("number_2").value="";
}
var answer=0;
function check(){
    answer=parseInt(document.getElementById("input_check_box").value);
    document.getElementById("input_check_box").value="";
    console.log("Answer In Lower Case - "+answer);
    if (answer==actual_answer){
        if (Answer_turn=="player1"){
            player1_score=player1_score+1;
            update_score();
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            update_score();
            document.getElementById("player2score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    
    if(Answer_turn=="player1"){
        Answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else{
        Answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}
function update_score(){
    localStorage.setItem("player1score",player1_score);
    localStorage.setItem("player2score",player2_score);
}