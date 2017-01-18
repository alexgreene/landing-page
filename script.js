var selected;
var secret = document.getElementById('secret');
var lastSecretContent;

function selectThis(tag, ident) {
	
	var secretContent;
	
		secretContent = document.getElementById(ident);
	
		if(tag.style.color == "rgb(227, 46, 116)") {
			tag.style.color = "gray";
			selected = null;
			lastSecretContent = null;
			$(tag).toggleClass('selected');
			$(secret).toggleClass('selected');
			secret.style.visibility = "hidden";
			secretGarden(0, secretContent);
		} 
		else {
			tag.style.color = "rgb(227, 46, 116)";
			if(selected != null){
				closeThis(selected, lastSecretContent);	
			}
			selected = tag;
			secret.style.visibility = "visible";
			secretGarden(1, secretContent);
			$(tag).toggleClass('selected');
			$(secret).toggleClass('selected');
		} 
	lastSecretContent = secretContent;	
}

function closeThis(tag, content){
	secretGarden(0, content);
	tag.style.color = "gray";
	selected = null;
	$(tag).toggleClass('selected');
	$(secret).toggleClass('selected');
	
}

function secretGarden(onoff, content){
	if(onoff == 1){
		content.style.display = "block";
	}
	else {
		content.style.display = "none";
	}
}