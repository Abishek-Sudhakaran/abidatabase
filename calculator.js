var screen="";
function display(c){
     screen+=c;
 
        document.getElementById("res").innerHTML=screen;
}
function empty(){
      screen="";
     document.getElementById("res").innerHTML=screen;
     
}
function operation(){
     if(screen.indexOf("+")!=-1){
     	var split=screen.split("+");
        var x=parseInt(split[0],2);
        var y=parseInt(split[1],2);
        var sum=x+y;
        var split4=sum.toString(2);
        document.getElementById("res").innerHTML=split4;
       } 
       else if(screen.indexOf("-")!=-1){
     	var split=screen.split("-");
        var x=parseInt(split[0],2);

        var y=parseInt(split[1],2);
        var sum=x-y;
        var split4=sum.toString(2);
        document.getElementById("res").innerHTML=split4;
       }
       else if(screen.indexOf("*")!=-1){
     	var split=screen.split("*");
        var x=parseInt(split[0],2);
        var y=parseInt(split[1],2);
        var sum=x*y;
        var split4=sum.toString(2);
        document.getElementById("res").innerHTML=split4;
       }
       else if(screen.indexOf("/")!=-1){
     	var split=screen.split("/");
        var x=parseInt(split[0],2);
        var y=parseInt(split[1],2);
        var sum=x/y;
        var split4=sum.toString(2);
        document.getElementById("res").innerHTML=split4;
       }   
}