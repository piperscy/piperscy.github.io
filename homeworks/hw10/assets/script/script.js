document.addEventListener("DOMContentLoaded", function () {
	function hideAllOutfits() {
	  let bodyOutfits = document.querySelectorAll('.outfit');
	  for (let i = 0; i < bodyOutfits.length; i++) {
		bodyOutfits[i].style.display = 'none';
	  }
	}
  
	function outfitSelection(outfitId) {
	  document.getElementById('body').style.display = 'none';
  	  hideAllOutfits();
	  document.getElementById(outfitId).style.display = 'block';
	}
  
	// Outfit 1
	let s1 = document.getElementById('s1');
	s1.onclick = function () {
	  outfitSelection('o1');
	};
  
	// Outfit 2
	let s2 = document.getElementById('s2');
	s2.onclick = function () {
	  outfitSelection('o2');
	};
  
	// Outfit 3
	let s3 = document.getElementById('s3');
	s3.onclick = function () {
	  outfitSelection('o3');
	};
  
	// Outfit 4
	let s4 = document.getElementById('s4');
	s4.onclick = function () {
	  outfitSelection('o4');
	};
  
	// Outfit 5
	let s5 = document.getElementById('s5');
	s5.onclick = function () {
	  outfitSelection('o5');
	};
  });

// strip outfit
let strip = document.getElementById('strip-button');
  strip.onclick = function () {
    hideAllOutfits();
    showBody();
  };
  