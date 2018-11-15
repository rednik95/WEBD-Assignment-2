/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function drop() {
	document.getElementById("mainmenu").classList.toggle("show");
}

function drop2() {
	document.getElementById("adminmenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("adminmenu");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
		var myDropdown = document.getElementById("mainmenu");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

//Manual Slidepressing
/*function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/
//auto Slidepressing
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}

//Testing Java script
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

//Validations
	$("#uoit-teaching-admin").validate();
	$("#carelton-teaching-admin").validate();
	$("#research-program-admin").validate();
	$("#pub-admin").validate();
	$("#press-admin").validate();
	$("#news-admin").validate();
	$("#current-group-admin").validate();
	$("#past-group-admin").validate();
	$("#teaching-admin").validate();
	$("#contact-admin").validate();
	$("#bio-admin").validate();
	
