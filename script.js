var word1 = 'элементарные';
var word2 = 'комментарий';
var word3 = 'программирования';
var word4 = 'меню';
var word5 = 'матлаб';
var word6 = 'арифметические';
var word7 = 'математических';
var word8 = 'плот';
var word9 = 'логические';
var word10 = 'энтер';
var word11 = 'точка';
var word12 = 'матрица';
var word13 = 'график';
var word14 = 'полар';
var word15 = 'отчистки';
var word16 = 'интерактивный';
var word17 = 'сохранить';
var word18 = 'командное';
var word19 = 'эхо';
var word20 = 'сессия';

var wordList = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20]

var WordId1 = ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var WordId2 = ["1", "18", "23", "34", "39", "45", "52", "61", "68", "82", "85"];
var WordId3 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
var WordId4 = ["38", "39", "40", "41"];
var WordId5 = ["50", "51", "52", "53", "54", "55"];
var WordId6 = ["67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80"];
var WordId7 = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114"];
var WordId8 = ["46", "56", "62", "73"];
var WordId9 = ["0", "12", "19", "32", "36", "43", "48", "59", "65", "80"];
var WordId10 = ["121", "122", "123", "124", "125"];
var WordId11 = ["57", "63", "75", "83", "89"];
var WordId12 = ["97", "106", "116", "125", "130", "135", "139"];
var WordId13 = ["35", "42", "47", "58", "64", "78"];
var WordId14 = ["86", "87", "88", "89", "90"];
var WordId15 = ["87", "98", "109", "117", "126", "131", "136", "140"];
var WordId16 = ["33", "37", "44", "49", "60", "66", "81", "84", "95", "100", "115", "120", "129", "134"];
var WordId17 = ["91", "99", "114", "119", "128", "133", "138", "142", "144"];
var WordId18 = ["112", "118", "127", "132", "137", "141", "143", "147", "148"];
var WordId19 = ["145", "146", "147"];
var WordId20 = ["91", "92", "93", "94", "95", "96"];

var wordIdList = [WordId1, WordId2, WordId3, WordId4, WordId5, WordId6, WordId7, WordId8, WordId9, WordId10, WordId11, WordId12, WordId13, WordId14, WordId15, WordId16, WordId17, WordId18, WordId19, WordId20]


function cross(testWord, id) {
	let results = 0;
	let inWord = "";
	for (var i = 0; i < id.length; i++) {
  		inWord += document.getElementById(id[i]).value;
	}
	if (testWord == inWord){
		results = 1;
		console.log("верный ответ");
		for (var i = 0; i < id.length; i++) {
  			document.getElementById(id[i]).style.backgroundColor = "#00FF00";
	}
	}
	console.log(id)
	console.log(inWord)
	return results;
}

function build_word(argument) {
	for (var i = 0; i <= 148; i++) {
  		document.getElementById(i).style.backgroundColor = "#CC0000";
  	}
	let res = 0;
	for (var i = 0; i < 20; i++){
		res += cross(wordList[i], wordIdList[i])

	}
	document.getElementById("text").innerHTML = res + "/20";

}