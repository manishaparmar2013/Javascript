function formatSubHead(unformatted, position){

	if(unformatted == ""){
		return "";
	}
	if(position > 1){
		return "<subHeadline><_char> </_char></subHeadline><subHeadline>" + unformatted + "</subHeadline>";
	}
	else{
		return "<subHeadline>" + unformatted + "</subHeadline>";
	}
}
function formatCaption(unformatted){

	if(unformatted == ""){
	
		return "";
		
	}
	
	unformatted = unformatted.replace(/<b>/g,"<_char bold='true'>");

	unformatted = unformatted.replace(/<\/b>/g,"</_char>");

	unformatted = unformatted.replace(/<i>/g,"<_char italic='true'>");

	unformatted = unformatted.replace(/<\/i>/g,"</_char>");
	
	unformatted = unformatted.replace(/<s>/g,"<_char supersub='superscript' line_break_penalty_degree='boolean'>");
	
	unformatted = unformatted.replace(/<\/s>/g,"</_char>");
	
	var paragraphs = unformatted.replace(/\r\n|\r|\n/g,"ß");
	paragraphs = paragraphs.split("ß");
	
	unformatted = "";
	
	for(element in paragraphs){
		
		if(paragraphs[element].length == 0){
			unformatted += "<photoCaption><_char> </_char></photoCaption>";
		}
		else{
			unformatted += "<photoCaption>" + paragraphs[element] + "</photoCaption>";
		}
		
	}

	return unformatted;
}


function formatPara(unformatted, location){

	if(unformatted == ""){
	
		return "";
		
	}
	
	unformatted = unformatted.replace(/<b>/g,"<_char bold='true'>");

	unformatted = unformatted.replace(/<\/b>/g,"</_char>");

	unformatted = unformatted.replace(/<i>/g,"<_char italic='true'>");

	unformatted = unformatted.replace(/<\/i>/g,"</_char>");
	
	unformatted = unformatted.replace(/<s>/g,"<_char supersub='superscript' line_break_penalty_degree='boolean'>");
	
	unformatted = unformatted.replace(/<\/s>/g,"</_char>");
	
	var paragraphs = unformatted.replace(/\r\n|\r|\n/g,"ß");
	paragraphs = paragraphs.split("ß");
	
	unformatted = "";
	
	for(element in paragraphs){
		
		if(paragraphs[element].length == 0){
			unformatted += "<bodyText><_char> </_char></bodyText>";
		}
		else{
			unformatted += "<bodyText>" + paragraphs[element] + "</bodyText>";
		}
		
	}
	
	if(location == 1){
		
		unformatted = "<bodyText><_char> </_char></bodyText>" + unformatted;
	
	}

	return unformatted;
}
function formatBulletList(bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7){
	
	var bulletList = "";
	var bulletArray = bullet1+"ß"+bullet2+"ß"+bullet3+"ß"+bullet4+"ß"+bullet5+"ß"+bullet6+"ß"+bullet7;
	bulletArray = bulletArray.split("ß");
	
	
	for(bullet in bulletArray){
		
		if(bulletArray[bullet] != ""){
	
			bulletArray[bullet] = bulletArray[bullet].replace(/<b>/g,"<_char bold='true'>");
			bulletArray[bullet] = bulletArray[bullet].replace(/<\/b>/g,"</_char>");
			bulletArray[bullet] = bulletArray[bullet].replace(/<i>/g,"<_char italic='true'>");
			bulletArray[bullet] = bulletArray[bullet].replace(/<\/i>/g,"</_char>");
			bulletArray[bullet] = bulletArray[bullet].replace(/<s>/g,"<_char supersub='superscript' line_break_penalty_degree='boolean'>");
			bulletArray[bullet] = bulletArray[bullet].replace(/<\/s>/g,"</_char>");
			bulletArray[bullet] = "<_char font_size='28216' text_color='JHPorange' font_name='/Wingdings'>n </_char>" + bulletArray[bullet];
			
			if(bulletList == ""){
				bulletList += "<bodyText space_before='10581'>" + bulletArray[bullet] + "</bodyText>";
			}
			else{
				bulletList += "<bodyText>" + bulletArray[bullet] + "</bodyText>";
			}
		}
	}
	return bulletList;
}
function formatFootnotes(footnote1, footnote2, footnote3){
	
	var footnoteList = "";
	var footnoteArray = footnote1+"ß"+footnote2+"ß"+footnote3;
	footnoteArray = footnoteArray.split("ß");
	
	
	for(footnote in footnoteArray){
		
		if(footnoteArray[footnote] != ""){
	
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<b>/g,"<_char bold='true'>");
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<\/b>/g,"</_char>");
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<i>/g,"<_char italic='true'>");
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<\/i>/g,"</_char>");
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<s>/g,"<_char supersub='superscript' line_break_penalty_degree='boolean'>");
			footnoteArray[footnote] = footnoteArray[footnote].replace(/<\/s>/g,"</_char>");
			footnoteList += "<footnotes>" + footnoteArray[footnote] + "</footnotes>";
		}
	}
	return footnoteList;
}
function createPara(subHead, body){
	
	subhead = formatSubHead(subHead);
	body = formatPara(body);
	
	return subHead + body;

}

