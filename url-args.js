var url = (window.location != window.parent.location) ? document.referrer: document.location;
var url = ""+url;
var args;
if(url.indexOf("?")>-1)
{
	
	var search = url.substring(url.indexOf("?")+1, url.length);
	args = search.split("?");
	for (var i=0;i<args.length;i++){

		document.write(args[i] + "<br>");

		if(args[i].indexOf("=") > -1){
			
			var assignmentArray = args[i].split("=");
			assignment(assignmentArray[0],assignmentArray[1]);
		}

		if(isValidTerm(args[i])){

			var result = getURLfromSearchTerm(search);
			if(result!==undefined){
				
				document.getElementsByName("page-content")[0].src=result;
			}
		}

	}
	
}

function assignment(name,value){
	if(name==="background"){
		document.body.style.background = value;	
		document.write("Setting ",name," to ",value,"<br>");
	}
	
}