// "use strict";
var operand1 = '';
var operand2 = '';
var operator = '';
console.log(eval('4 + 5'));
var button = document.getElementsByClassName('btn');
var display = document.getElementById('vals');
for(var i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(){
		var value = this.getAttribute('data-value');
		if(value == 'AC'){
			operand1 = 0;
			operand2 = 0;
			operator = null;
			display.innerText = '';
		}else if(value == '+'){
			operand1 = (display.textContent);
			operator = '+';
			display.textContent = '';
		}else if(value == '-'){
			operand1 = parseFloat(display.textContent);
			display.textContent = '';
			operator = '-';
		}else if(value == '*'){
			operand1 = parseFloat(display.textContent);
			display.textContent = '';
			operator = '*';
		}else if(value == '/'){
			operand1 = parseFloat(display.textContent);
			display.textContent = '';
			operator = '/';
		}else if(value == '%'){
			operand1 = parseFloat(display.textContent);
			display.textContent = '';
			operator = '%';
		}else if(value == 'x2'){
			var sq = parseFloat(display.textContent);
			sq = sq*sq;
			display.innerText = sq;
			operand1 = 0;
			operand2 = 0;
			operator = null;
		}else if(value == '='){
			operand2 = parseFloat(display.textContent);
			//console.log(eval('operand1 operator operand2'));
			var result;
			if(operator == '/' && operand2 == 0){
				result = 'Error';
			}else{
			 result = eval(operand1+operator+operand2);
			}
			display.innerText = result;
		}else{
			display.innerText += value;
		}
	})
}