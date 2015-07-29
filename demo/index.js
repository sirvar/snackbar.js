$(document).ready(function() {
	$("#demo-1").click(function() {
		$("body").snackbar();
	})

	$("#demo-2").click(function() {
		$("body").snackbar({
			message: "Message sent successfully"
		});
	})

	$("#demo-3").click(function() {
		$("body").snackbar({
			message: "Message archived",
			option: true,
			optionText: "UNDO",
			callback: function() {
				// Run code if user clicks on option
			}
		});
	})

	$("#demo-4").click(function() {
		$("body").snackbar({
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar justo eros, vel porttitor metus gravida at. ",
			duration: 20
		})
	})

	$("#demo-5").click(function() {
		$("body").snackbar({
			message: "Swipe to dismiss me!",
			swipe: true
		});
	})

	$("#demo-6").click(function() {
		$("body").snackbar({
			message: "I can be any color you want!",
			option: true,
			optionText: "HERE TOO!",
			primary: "#FF69B4",
			accent: "#00FFFF"
		});
	})


	hljs.configure({
	  tabReplace: '    '
	})
	hljs.initHighlighting();
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
})