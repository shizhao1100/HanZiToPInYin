
document.getElementById("Translatebutton").onclick = 
// var a=window.getSelection().toString();
function getSelectionText() {
	var UnKnowSentence=document.getElementById('field1').value
	var ResultPY=null;
	ResultPY = Translate(UnKnowSentence);
	document.getElementById('field2').value=ResultPY;
};