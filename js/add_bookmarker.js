function EncodeForm(data)
{
	var out = [];
	for (var key in data)
	{
		var k = encodeURIComponent(key);
		var v = encodeURIComponent(data[key]);
		out.push([k, v].join("=").replace(/%20/g, '+'));
	}
	return out.join("&");
}
var form_data =
{
	mode: "add",
	tt:   document.querySelector("input[name='tt']").value,
	id:   document.querySelector("input[name='illust_id']").value,
	type: "illust",
	from_sid: "",
	comment:  "",
	tag:      "",
	restrict: 0,
}
var star = document.createElement("a");
star.innerText = "★";
star.className = "_button";
star.onclick = function()
{
	var xreq = new XMLHttpRequest();

	xreq.open("POST", "bookmark_add.php");
	xreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xreq.send(EncodeForm(form_data));
}

var bookmarker = document.querySelector("a.add-bookmark");
bookmarker.innerText = "option";

var container = document.querySelector("div.bookmark-container");
container.insertBefore(star);