$(function() {
	var i = 0;
	var title = $("#player-nowplaying a").eq(1).html();
	var artist = $("#player-nowplaying a").eq(0).html();

	$('#player-nowplaying').bind('DOMNodeInserted', function(event) {
		i++;
		if ( event.type == 'DOMNodeInserted' && i == 3) {
			console.log(event);
			newArtist = $("#player-nowplaying a").eq(0).html();
			newTitle = $("#player-nowplaying a").eq(1).html();
			chrome.extension.sendRequest({msg: newArtist + " - " + newTitle}, function(response) {  // optional callback - gets response
	 			artist = $("#player-nowplaying a").eq(0).html()
			});
		}
		if (i == 5) { i = 0 };
	});
});