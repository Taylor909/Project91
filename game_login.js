var storeName1,storeName2;
function logIn(){
    storeName1= document.getElementById("player1Input").value;
    storeName2= document.getElementById("player2Input").value;
    localStorage.setItem("playerName1", storeName1);
    localStorage.setItem("playerName2", storeName2);
    window.location= "game_page.html";
}