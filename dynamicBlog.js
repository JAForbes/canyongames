contentDisplay();
function contentDisplay(){     
  		
    var index1 = (""+window.location).indexOf("blog-only");
   
    var index3 = (""+document.location).indexOf("blog-only");
    
   
	if(index1>-1||index3>-1){
        var e = document.getElementById("navbarframe");
        e.style.display = 'none';
        var f = document.getElementById("side-pane");
        var b = document.getElementById("tumblr-blog");
        f.style.display = 'none';
        b.setAttribute('style','');
        b.style.position="absolute";
        b.style.top="0px";
        b.style.left="0px";
        document.getElementsByName("page-content")[0].style.display = 'none';   

        
	}
    else{
        var e = document.getElementById("tumblr-blog");
        e.style.display = 'none';
         
    }
}       
                    
                    
	