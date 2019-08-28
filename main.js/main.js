
//document.addEventListener('DOMContentLoaded', function(){
	
	//for(var i=0; i<10; i++){
	//	let row = ' '
	//	for(var j=1; j<=10;j++){
	//		row += j + (10 * i)
	//		row += ' '
	//		if(i === 0)
	//			row += ' '
	//	}
	//	console.log(row)
	//}
	 
	 //let row = ''
	 //for(var i=1; i<=100; i++){
	 	//row += i
	 	//row += ' '
	 	//if(i<10)
	 	//	row += ' '
	 	//if(i%10 === 0){
	// 		row += '\n'
	 //	}
	// }
	 		//console.log(row)
	 //	var odd = []
	// 	var even = []
	// var array = [-4,8,-12,99,0,47,-98,15,78]
	// 	for(var i=0; i<array.length; i++){
	// 		if(array[i]%2 === 0){
	 //			even.push(array[i])
	 	//	}else{
	 	//		odd.push(array[i])
	 	//	}
	// 	}

//	 	for(var i=0; i<even.length; i++){
//	 		for(var j=0; j<even.length-1; i++){
//	 			if(even[j]<even[j+1]){
//	 				let temp = even[i]
//	 				even[i] = even[j+1]
//	 				even[j+1] = temp
//	 			}
//	 		}
//	 	}

//	 	for(var i=0; i<odd.length; i++){
//	 		for( var j=0; j<odd.length-1; j++){
//	 			if(odd[j]<odd[j+1]){
//	 				let temp = odd[j]
//	 				odd[j] = odd[j+1]
//	 				odd[j+1] = temp
//	 			}
//	 		}
//	 	}
//	 	console.log(even 'even')
//	 	console.log(odd 'odd')

//	 	for(var i=0; i<array.length; i++){
//	 		if(array[i]<0)
//	 			array.splice(i,1)
//	 	}
//	 	console.log(array)
//
//	 	let number = +prompt('Введите число',0)
//	 	let degree = +prompt('ведите степень', 0)
//	 	alert(pow(number,degree))

//})

//function pow(a, b){
//	var result = a 
//	for(var i=0; i<b;i++){
//		result *= a
//	}
//	return result

function showMenu() {
	var menu = document.getElementById('menu');
	menu.classList.toggle('open');
}


window.onscroll = function() {
	var topp = document.getElementById('topp')
	if(window.pageYOffset > 75){
		topp.classList.add('show')
	}else{
		topp.classList.remove('show')
	}
}

	
document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

})

function showForm() {
	var forma = document.getElementById('forma');
	forma.classList.add('see');
}

function closeForm() {
	var forma = document.getElementById('forma');
	forma.classList.remove('see')
}




//})











