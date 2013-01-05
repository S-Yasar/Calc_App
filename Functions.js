//Regular Calculations 
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

//Conversion Calculation 
function conv(){
var ccm= con.inp.value*con.in1.value
if (con.outp.value== "cm"){con.in2.value= ccm*1;}
else if (con.outp.value== "m"){con.in2.value= ccm/100;}
else if (con.outp.value== "inch"){con.in2.value= ccm*0.393701;}
else if (con.outp.value== "foot"){con.in2.value= ccm*0.0328084;}
}