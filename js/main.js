$(document).ready(function(){
	chrome.tabs.getSelected(function(tab){
		var url=tab.url;
		$('#qr').qrcode(url);
	});
});