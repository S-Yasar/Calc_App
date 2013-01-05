function ans(){
	calc.cal.value = eval(calc.cal.value);
}
function del(){
	calc.cal.value = calc.cal.value.substring(0,-1)
}
function c(){
	calc.cal.value= calc.cal.value*calc.cal.value;	
}
function p(){
	calc.cal.value= calc.cal.value*100;
}
function r(){
	calc.cal.value= Math.sqrt(calc.cal.value)	
}
function pi(){
	calc.cal.value= Math.PI*calc.cal.value	
}
