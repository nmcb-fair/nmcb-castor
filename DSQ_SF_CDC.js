var obj = JSON.parse('{dsqsf}');
var fatigue = 0;
if((Object.values(obj[0])[0])>=1 && (Object.values(obj[0])[1])>=1){
	fatigue+=1;
}
	else{
	fatigue+=0};
var sore = 0;
var excs = 0;
var pem = 0;
if((Object.values(obj[1])[0])>=1 && (Object.values(obj[1])[1])>=1){
	sore+=1;
}
	else{
	sore+=0};
if((Object.values(obj[2])[0])>=1 && (Object.values(obj[2])[1])>=1){
	excs+=1;
}
	else{
	excs+=0};
if(sore + excs >=1){
	pem+=1;
}
	else{
	pem+=0};
var sleep = 0;
if((Object.values(obj[3])[0])>=1 && (Object.values(obj[3])[1])>=1){
	sleep+=1;
}
	else{
	sleep+=0};
var memory = 0;
var atten = 0;
var cog = 0;
if((Object.values(obj[6])[0])>=1 && (Object.values(obj[6])[1])>=1){
	memory+=1;
}
	else{
	memory+=0};
if((Object.values(obj[7])[0])>=1 && (Object.values(obj[7])[1])>=1){
	atten+=1;
}
	else{
	atten+=0};
if(memory + atten >= 1){
	cog+=1;
}
	else{
	cog+=0};
var pain = 0;
if((Object.values(obj[4])[0])>=1 && (Object.values(obj[4])[1])>=1){
	pain+=1;
}
	else{
	pain+=0};
var immun = 0;
if((Object.values(obj[12])[0])>=1 && (Object.values(obj[12])[1])>=1){
	immun+=1;
}
	else{
	immun+=0};
var symptoms = 0;
if(pem + sleep + cog + pain + immun>=4){
	symptoms+=1;
}
	else{
	symptoms+=0};
var cdc = 0;
if(fatigue + symptoms==2){
	cdc+=1;
}
	else{
	cdc+=0};
cdc;
