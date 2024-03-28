var oi1 = 0;
if({c31_faint}==1){
	oi1+=1;
} else{
	oi1+=0};
var oi2 = 0;
if({c31_faint_freq}==1){
	oi2+=0;
} else if({c31_faint_freq}==2){
	oi2+=1;
} else if({c31_faint_freq}==3){
	oi2+=2;
} else if({c31_faint_freq}==4){
	oi2+=3};
var oi3 = 0;
if({c31_faint_sev}==1){
	oi3+=1;
} else if({c31_faint_sev}==2){
	oi3+=2;
} else if({c31_faint_sev}==3){
	oi3+=3};
var oi4 = 0;
if({c31_faint_change}==1){
	oi4+=3;
} else if({c31_faint_change}==2){
	oi4+=2;
} else if({c31_faint_change}==3){
	oi4+=1;
} else if({c31_faint_change}>=3){
	oi4+=0};
var sumoi = (oi1 + oi2 + oi3 + oi4)
var oi = sumoi*4
