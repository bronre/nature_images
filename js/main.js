

function changeActiveImg(event) {
	var url=$(event.target).attr("src");
	$("#main-container img").attr("src",url);
}


function yosemite() {
console.log("yosemite");
}

function everest() {
console.log("everest");
$("#main-container img").attr("src", "images/everest.jpg")
}
function sahara() {
console.log("sahara");
}


$("#yosemite").click(changeActiveImg);
$("#everest").click(changeActiveImg);
$("#sahara").click(changeActiveImg);

$("#images-container img").click(changeActiveImage);

//what am I looking for?
//what am I trying to do here?

//event.target-get the ENTIRE thing relarted to what you are clicking


