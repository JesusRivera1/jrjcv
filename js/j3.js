function tabla(numero){
		let num = parseInt(numero);
		let res=0;
		for(let x=1; x<=10; x++){
			res=num*x;
			document.write(num +"*"+x+"="+res +"<br>")
		}
	}//fin del function
