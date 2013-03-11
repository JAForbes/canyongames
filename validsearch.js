var base="https://dl.dropbox.com/u/4861305/"
var validTerms = 
{ 
	"astart":"music/astart.html",
	"impossiblelake": "music/impossiblelake.html",
	"blackhand23":"music/blackhand23.html",
	"canyon":"canyon.html",
	"default":"me.html",
	"xmas":"./games/xmas.html",
	"tree":"./games/tree.html",
	"rakau":"./games/rakau.html",
	"iago":"./games/iago.html",
	"firstcell":"./games/firstcell.html"
};

function getURLfromSearchTerm(searchTerm){

	var valid = base+validTerms["default"];
	for(key in validTerms)
	{
		if(searchTerm===key)
		{
			valid = base+validTerms[key];
		}
	}
	return valid;
}

function isValidTerm(term){
	for(key in validTerms)
	{
		if(term===key)
		{
			return true;
		}
	}
	return false;
}