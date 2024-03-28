var obj = JSON.parse('{phq}');
var phq = 0;
if((parseInt(Object.values(obj[0])[0]) + parseInt(Object.values(obj[1])[0]))>=3){
	phq+=1;
}
	else{
	phq+=0;
};
