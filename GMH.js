##GMH Lyme Dependency (calckps01)
var splitted="{gmh_diagnosis01}".split(';');
var lymediag = 0;
if(splitted.indexOf("4")> -1){
	lymediag+=1;
} else{
	lymediag+=0};
var lymetx = 0;
if(lymediag==1 && {gmh_lyme_tx}==1){
lymetx +=1;
} else {
lymetx +=0;
};
lymetx;

##if any diagnosed condition selected
var splitted="{gmh_diagnosis02}".split(';');
var diagactive = 0;
if(splitted.indexOf("1")> -1){
	diagactive+=1;
}
if(splitted.indexOf("2")> -1){
	diagactive+=1;
}
if(splitted.indexOf("3")> -1){
	diagactive+=1;
}
if(splitted.indexOf("4")> -1){
	diagactive+=1;
}
if(splitted.indexOf("5")> -1){
	diagactive+=1;
}
if(splitted.indexOf("6")> -1){
	diagactive+=1;
}
if(splitted.indexOf("7")> -1){
	diagactive+=1;
}
if(splitted.indexOf("8")> -1){
	diagactive+=1;
}
if(splitted.indexOf("9")> -1){
	diagactive+=1;
}
if(splitted.indexOf("10")> -1){
	diagactive+=1;
}
if(splitted.indexOf("11")> -1){
	diagactive+=1;
}
if(splitted.indexOf("12")> -1){
	diagactive+=1;
}
if(splitted.indexOf("13")> -1){
	diagactive+=1;
}
if(splitted.indexOf("14")> -1){
	diagactive+=1;
};
var diagactive2=0;
if(diagactive>=1){
	diagactive2+=1;
} else {
	diagactive2+=0;
};
diagactive2;

KPS Cal (JS)
##KPS AND Dependency (calckps01)
if({kps_normalactivity}==0 && {kps_ambulatory}==1){
1;
} else {
0;
};
