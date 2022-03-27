// Function //

// Factorial //
function factorial(num) {
				
				if ( num > 9999 ) {
								
								return "Nothing";
				}
				
				if ( num < 0 ) {
															
								return -1;
				}
				
				if ( num == 0 ) {
								
								return 1;
				}
				
				else {
								
							return( num * factorial(num - 1) );
				}
				
}
// Main Factorial //

function mainFactorial() {
				
				var f = document.getElementById("f").value;
				
				var fresult;
			 
			 fresult = factorial(f);
			 
			 document.getElementById("fawn").value = fresult;
				
}

// Permutation // 
function Permutation() {
				
				var pn = document.getElementById("pn").value;
				var pr = document.getElementById("pr").value;
				var presult;
				
				presult = factorial(pn) / factorial(pn - pr);
				
				document.getElementById("pawn").value = presult;
				
}

// Circular Permutation //
function CircularPermutation() {
				
				var cpn = document.getElementById("cpn").value;
				
				var cpresult;
				
				cpresult = factorial(cpn - 1);
				
				document.getElementById("cpawn").value = cpresult;
				
}

// Distinguishable Permutation //
function DistinguishablePermutation() {
				
				var dpn = document.getElementById("dpn").value;
				
				var dpp = document.getElementById("dpp").value;
				
				var dpq = document.getElementById("dpq").value;
				
				var dpr = document.getElementById("dpr").value;
				
				dpresult = factorial(dpn) / ( factorial(dpp) * factorial(dpq) * factorial(dpr) )
				
				document.getElementById("dpawn").value = dpresult
				
}

// Combination //
function Combination() {
				
				var cn = document.getElementById("cn").value;
				var cr = document.getElementById("cr").value;
				var cresult;
				
				cresult = factorial(cn) / ( factorial(cn - cr) * factorial(cr) );
				
				document.getElementById("cawn").value = cresult
				
}
				
