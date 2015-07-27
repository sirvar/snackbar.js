/*
snackbar.js
© 2015 Rikin Katyal
*/
$.fn.snackbar = function(args) {

    var $this = this;

    // Remove existing snackbars
    $this.clear = function() {
        $(".snackbar").remove();
    }

    $this.clear();

    // Options
    var primaryCol = "#FFF",
        accentCol = "#EFFC0A",
        duration = 3,
        message = "This is a snackbar. (snackbar.js)",
        option = false,
        optionText = "UNDO",
        swipe = false;

    // Set options specified in args
    if (args != undefined) {
        if (args.primaryCol != undefined) {
            primaryCol = args.primaryCol;
        }

        if (args.accentCol != undefined) {
            accentCol = args.accentCol;
        }

        if (args.duration != undefined) {
            duration = args.duration;
        }

        if (args.message != undefined) {
            message = args.message;
        }

        if (args.option != undefined) {
            option = args.option;
        }

        if (args.optionText != undefined) {
            optionText = args.optionText;
        }

        if (args.swipe != undefined) {
            swipe = args.swipe;
        }

        if (args.callback == undefined) {
            args.callback = function() {};
        }
        $this.callback = args.callback;
    }

    // Add Google's Roboto font
    $("head").append("<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>");

    // Create main snackbar css class
    var $snackbarClass = {
        "position": "fixed",
        "width": "auto",
        "height": "45px",
        "background": " #323232",
        "line-height": "45px",
        "padding-left": "16px",
        "padding-right": "16px",
        "text-align": "center",
        "border-radius": "2px",
        "bottom": "15px",
        "left": "15px",
        "display": "none",
        "white-space": "nowrap"
    };

    // Create message text css class
    var $messageText = {
        "color": primaryCol,
        "font-family": "Roboto",
        "font-weight": "300",
        "font-size": "14px",
        "user-select": "none",
    }

    // Create option text css class
    var $optionText = {
        "color": accentCol,
        "font-family": "Roboto",
        "font-weight": "300",
        "font-size": "13px",
        "padding-left": "25px",
        "cursor": "pointer",
        "user-select": "none"
    }

    // Add snackbar to element, with or without option text
    if (option) {
        $snackbar = $('<div class="snackbar"><span class="message">' + message + '</span><span class="option">' + optionText + '</span></div>');
        $this.append($snackbar);
    } else {
        $snackbar = $('<div class="snackbar"><span class="message">' + message + '</span></div>');
        $this.append($snackbar);
    }

    // Add css class to snackbar and text
    $(".snackbar").css($snackbarClass);
    $(".message").css($messageText);
    $(".option").css($optionText);

    // Animate snackbar in
    $($snackbar).show("drop", {
        direction: "down"
    }, 300)

    // If swipe to dismiss is false, hide after duration
    if (!swipe) {
        $($snackbar).delay(duration * 1000).hide("drop", {
            direction: "down"
        }, 300);
    } else {
        // Setup swipe to dismiss
        var offsetLeft = $($snackbar).offset().left;
        $(".snackbar").draggable({
            axis: "x",
            start: function(event, ui) {
                startX = event.clientX;
            },
            drag: function(event, ui) {
                if (startX - event.clientX > 100) {
                    $(".snackbar").hide("drop", {
                        direction: "left"
                    }, 300);
                    $("body").mouseup();
                }
                if (event.clientX - startX > 100) {
                    $(".snackbar").hide("drop", {
                        direction: "right"
                    }, 300);
                    $("body").mouseup();
                }
            },
            stop: function(event, ui) {
                if (startX - event.clientX < 100) {
                    $(this).animate({
                        left: offsetLeft
                    }, 250);
                }
            }
        })
    }

    if (option) {
        // Setup callback for option click
        $(".option").click(function() {
            $this.callback();
        });
    }

}
