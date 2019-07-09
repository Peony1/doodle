var banner_img = document.querySelectorAll(".banner .banner_img > li");
var spot = document.querySelectorAll(".banner .spot > div");
var searchBox = document.querySelector(".search");
var search = searchBox.querySelector("input");
var header = document.querySelector(".header");
var headerLeft = document.querySelector(".header .left");
var headerRight = document.querySelector(".header .right");

// 搜索框
search.onfocus = function() {
	searchBox.classList.add("active");
}
search.onblur = function() {
	searchBox.classList.remove("active");
}

// 滚动条
window.onscroll = function() {
	var scrollTop = document.documentElement.scrollTop;
	if (scrollTop > 10) {
		header.style.height = "41px";
		header.style.borderBottomColor = "#bbb";
		header.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)";
		headerLeft.style.padding = "10px 0";
		headerRight.style.padding = "5px 0";
	} else {
		header.style.height = "67px";
		header.style.borderColor = "#eee";
		header.style.boxShadow = "";
		headerLeft.style.padding = "20px 0";
		headerRight.style.padding = "20px 0";
	}

}


// 轮播图
for (var i = 0; i < spot.length; i++) {
	spot[i].index = i;
	spot[i].onmouseover = function() {

		for (var j = 0; j < spot.length; j++) {
			spot[j].classList.remove("active");
			banner_img[j].classList.remove("active");
		}
		this.classList.add("active");
		banner_img[this.index].classList.add("active");

	}
}
// 拖放

var card = document.querySelectorAll(".card .card_content");

for(var i =0 ;i<card.length;i++){
	card[i].ondragstart = function(ev){
		ev.dataTransfer.setData("Text",ev.target.id);
	}
	card[i].ondrop = function(ev)
	{
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text");
		var data = document.getElementById(data);
		var parent = ev.target.parentNode;
		if(ev.target.classList.contains('card_content')){

			parent.insertBefore(data,ev.target);
			// console.log(ev.target);
		
		}else if(parent.classList.contains('card_content')){
			// console.log(ev.target);
			var pp = ev.target.parentNode;
			parent = parent.parentNode;
			parent.insertBefore(data,pp);
		}else{
			console.log("不能拖动");
		}
	}
	card[i].ondragover = function(ev){
		ev.preventDefault();
	 }
}