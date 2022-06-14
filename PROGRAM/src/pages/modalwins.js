var modal = document.getElementById('myModal');
var btn = document.getElementById("import_data_dat");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

var modal1 = document.getElementById('myModal-1');
var btn1 = document.getElementById("closing-button-c-1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById('myModal-2');
var btn2 = document.getElementById("closing-button-c-2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal-3');
var btn3 = document.getElementById("closing-button-c-3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

var modal4 = document.getElementById('myModal-4');
var btn4 = document.getElementById("closing-button-c-4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

var modal5 = document.getElementById('myModal-5');
var btn5 = document.getElementById("closing-button-c-5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function() {
  modal5.style.display = "block";
}
span5.onclick = function() {
  modal5.style.display = "none";
}



var modal6 = document.getElementById('myModal-6');
var btn6 = document.getElementById("closing-button-ch-1");
var span6 = document.getElementsByClassName("close6")[0];
btn6.onclick = function() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction(myinput, mydropdown) {
	var input, filter, ul, li, a, i;
	input = document.getElementById(myinput);
	filter = input.value.toUpperCase();
	div = document.getElementById(mydropdown);
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	   txtЗначение = a[i].textСодержание || a[i].innerText;
		 if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		     a[i].style.display = "";
         document.getElementById('choose_gen').innerHTML = a[i].toString();
		 } else {
       a[i].style.display = "none";
		 }
	}
}

drpdwn = document.getElementById("myDropdown");
drpdwn.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
      console.log("Clicked", event.target.textContent);
  });

var modal7 = document.getElementById('myModal-7');
var btn7 = document.getElementById("closing-button-ch-2");
var span7 = document.getElementsByClassName("close7")[0];
btn7.onclick = function() {
  modal7.style.display = "block";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function filterFunction1() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput1");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown1");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	   txtЗначение = a[i].textСодержание || a[i].innerText;
		 if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		     a[i].style.display = "";
		 } else {
       a[i].style.display = "none";
		 }
	}
}


var modal8 = document.getElementById('myModal-8');
var btn8 = document.getElementById("closing-button-ch-3");
var span8 = document.getElementsByClassName("close8")[0];
btn8.onclick = function() {
  modal8.style.display = "block";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterFunction2() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput2");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown2");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	   txtЗначение = a[i].textСодержание || a[i].innerText;
		 if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		     a[i].style.display = "";
		 } else {
       a[i].style.display = "none";
		 }
	}
}


var modal9 = document.getElementById('myModal-9');
var btn9 = document.getElementById("closing-button-ch-4");
var span9 = document.getElementsByClassName("close9")[0];
btn9.onclick = function() {
  modal9.style.display = "block";
}
span9.onclick = function() {
  modal9.style.display = "none";
}
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function filterFunction3() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput3");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown3");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	   txtЗначение = a[i].textСодержание || a[i].innerText;
		 if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		     a[i].style.display = "";
		 } else {
       a[i].style.display = "none";
		 }
	}
}


var modal10 = document.getElementById('myModal-10');
var btn10 = document.getElementById("closing-button-ch-5");
var span10 = document.getElementsByClassName("close10")[0];
btn10.onclick = function() {
  modal10.style.display = "block";
}
span10.onclick = function() {
  modal10.style.display = "none";
}
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

function filterFunction4() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput4");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown4");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
	   txtЗначение = a[i].textСодержание || a[i].innerText;
		 if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
		     a[i].style.display = "";
		 } else {
       a[i].style.display = "none";
		 }
	}
}




// ЗАКРЫТИЕ ДЛЯ МОДАЛЬНЫХ ОКОН ПРИ НАЖАТИЕ НА ПУСТОТУ С ЗАТЕМНЕНИЕМ
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }

  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}


function showVsHide(cb, frame, frame1) {
  cb = document.getElementById(cb);
  frame = document.getElementById(frame);
  frame1 = document.getElementById(frame1);
    if (cb.checked) {
      frame.style.display = "block";
      frame1.style.display = "none";
    }
    else {
      frame.style.display = "none";
      frame1.style.display = "block";
    }
}
