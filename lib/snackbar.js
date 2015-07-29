/*
    snackbar.js
    © 2015 Rikin Katyal
*/
$.fn.snackbar = function(args) {

    var $this = this;
    var $snackbar = $('<div class="snackbar"></div>');

    $('.snackbar').remove();

    // Options
    var primary,
        accent,
        duration = 3,
        message = "This is a snackbar. (snackbar.js)",
        option = false,
        optionText = "UNDO",
        swipe = false;

    // Set options specified in args
    if (args != undefined) {
        if (args.primary != undefined) {
            primary = args.primary;
        }

        if (args.accent != undefined) {
            accent = args.accent;
        }

        if (args.duration != undefined) {
            duration = args.duration;
        }

        if (args.message != undefined) {
            message = args.message;
        }

        if (args.optionText != undefined) {
            optionText = args.optionText;

            if (optionText.length > 0) {
                option = true;
            }
        }

        if (args.swipe != undefined) {
            swipe = args.swipe;
        }

        if (args.callback == undefined) {
            args.callback = function() {};
        }
        $snackbar.callback = args.callback;
    }

    $message = $('<span class="snackbar-message"></span>');
    $message.text(message);

    if (primary != undefined) {
        $message.css("color", primary);
    }

    $snackbar.append($message);

    if (option) {
        $option = $('<span class="snackbar-option"></span>');
        $option.text(optionText);

        if (accent != undefined) {
            $option.css("color", accent)
        }

        $snackbar.append($option);
    }

    $this.append($snackbar);

    // Animate snackbar in
    $($snackbar).show("drop", {
        direction: "down"
    }, 300)

    // If swipe to dismiss is false, hide after duration
    if (!swipe) {
        $snackbar.delay(duration * 1000).hide("drop", {
            direction: "down"
        }, 300);
    } else {
        // Setup swipe to dismiss
        var offsetLeft = $($snackbar).offset().left;
        $snackbar.draggable({
            axis: "x",
            start: function(event, ui) {
                startX = event.clientX;
            },
            drag: function(event, ui) {
                if (startX - event.clientX > 100) {
                    $snackbar.css("opacity", 1-(startX - event.clientX - 100)/200);
                }
                if (event.clientX - startX > 100) {
                    $snackbar.css("opacity", 1-(event.clientX - startX - 100)/200);
                }
            },
            stop: function(event, ui) {
                if (startX - event.clientX > 100) {
                    $snackbar.hide("drop", {
                        direction: "left"
                    }, 300);
                }
                if (event.clientX - startX > 100) {
                    $snackbar.hide("drop", {
                        direction: "right"
                    }, 300);
                }
                if (startX - event.clientX < 100) {
                    $(this).animate({
                        left: offsetLeft
                    }, 250);
                    $snackbar.css("opacity", 1);
                }
            }
        })
    }

    if (option) {
        // Setup callback for option click
        $option.click(function() {
            $snackbar.callback();
        });
    }

}
