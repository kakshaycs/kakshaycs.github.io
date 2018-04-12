var A=['-','-','-','-','-','-','-','-','-','-','-'];
var p1=[0,0,0,0,0,0,0,0,0,0];
var p2=[0,0,0,0,0,0,0,0,0,0];
var index=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
var AA=['X','0'];
var temp=0
document.getElementById('msg').innerHTML="Click your position";
document.getElementById("restart").style.visibility = "hidden";


function reload(){
	location.reload();
}



function check_winner(A){
    for(var i=0;i<8;i++){
            if ( A[index[i][0]]+A[index[i][1]]+A[index[i][2]]==3) 
            { 
                return 1;
            } 
          }
    return 0;
}

function my_min(B,i){

	a=index[i][0];
	b=index[i][1];
	c=index[i][2];
	if(B[a]==1 && B[b]==1 && A[c]=='-')
		return c;
	else if(B[b]==1 && B[c]==1 && A[a]=='-')
		return a;
	else if(B[a]==1 && B[c]==1 && A[b]=='-')
		return b;
	else
		return -1;
}


function choose_location(){
	while (1)
	{
		var n=Math.floor(Math.random() * 8);
		if (A[n]=='-')
			return n;
	}
}

function predict_location(B){
     
     for (var i = 0; i < 8; i++) {
        if((B[index[i][0]]+B[index[i][1]]+B[index[i][2]])==2 && my_min(B,i)!=-1){

        	return my_min(B,i);
        }
     }
  return -1;
}

function disableall(){
	for (var i=1;i<10;i++){
		var ch=i.toString();
	 document.getElementById(ch).disabled = true;
	}

}




function show(id){

	document.getElementById(id).innerHTML='X';
	 document.getElementById(id).disabled = true;
	var a=parseInt(id);
    p1[a-1]=1;
    A[a-1]='X';
    temp+=1;
    var ch=check_winner(p1);
    if (ch==1){
    document.getElementById('msg').innerHTML="WOW! YOU WON THE THE MATCH";
       disableall();
       document.getElementById("restart").style.visibility = "visible";


     }
   else if (temp==9){
       document.getElementById('msg').innerHTML=" Match Draw";	
       disableall();
       document.getElementById("restart").style.visibility = "visible";


   }
   else {

    var n=choose_location()
    var n1=predict_location(p1);
    var n2=predict_location(p2);
     console.log("akshay",n,n1,n2);
     if (n1!=-1)
     	n=n1;
     else if (n2!=-1)
     	n=n2;
     A[n]='0';
     p2[n]=1;
     temp+=1;
     var id1=(n+1).toString();
     document.getElementById(id1).innerHTML='0';
	 document.getElementById(id1).disabled = true;
    var ch=check_winner(p2);
    console.log(ch);
    if (ch==1){
    document.getElementById('msg').innerHTML="Sorry ! you lose the game "; 
    disableall();
    document.getElementById("restart").style.visibility = "visible";


     }


   }



}