function firstLetter(word){
return word.slice(0,1);
}

//for currency w/o ()
function currencyFormat(n) {
    var parts=n.toString().split(".");
    return '$' + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
}

//for PCA's ($6,000.00) version
function currencyFormatParen(n) {
	if(n){
    var parts=n.toString().split(".");
    return "($" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ")";
	} else {
		return '';
	}
}

function combineCaseElements(a,b,c) {
	if (a && b && c){
		var formattedPrice = currencyFormatParen(c);
		return a + b + ' ' + formattedPrice;
	} else if (a && b){
		return a + b;
	} else{
		return '';
	}
}