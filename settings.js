//get the stored homepage
var homePage = localStorage.getItem("homepage");
//if stored home page is null, set it to scanuproductions.com
if (homePage == null){
	homePage = "http://www.scanuproductions.com";
}
//display the current home page
document.getElementById("homePageInput").value = homePage;
function updateHP(){
	localStorage.setItem("homepage", document.getElementById("homePageInput").value)
}

var NTtype = localStorage.getItem("nttype");
var NTpage = localStorage.getItem("ntpage");
if (NTtype == null){
	NTtype = 0;
	document.getElementById("defaultNT").checked = true;
}
else if (NTtype == 0){
	document.getElementById("defaultNT").checked = true;
}
else if (NTtype == 1){
	document.getElementById("HPNT").checked = true;
}
else {
	document.getElementById("customNT").checked = true;
	if (NTpage == null){
		NTpage = "http://www.google.com";
	}
	document.getElementById("customURL").value = NTpage;
}
function setNT() {
	if (document.getElementById("defaultNT").checked == true){
		NTpage = "rag://newtab";
		NTtype = 0;
	}
	else if (document.getElementById("HPNT").checked == true){
		NTpage = homePage;
		NTtype = 1;
	}
	else {
		NTpage = document.getElementById("customURL").value;
		NTtype = 2;
	}
	localStorage.setItem("ntpage", NTpage);
	localStorage.setItem("nttype", NTtype);
}