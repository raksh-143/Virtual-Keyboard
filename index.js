$(function () {
    var keys1 = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'br',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'br',
        'caps', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'back', 'br',
        'keys2', ',', ' ', '.', 'enter', 'br'
    ];
    var keys2 = [
        '1', '2', '3', '+', '-', '@', '$', '(', ')', 'br',
        '4', '5', '6', '*', '/', '&lsquo;', '&ldquo;', ':', '#', 'br',
        '7', '8', '9', ',', '=', '!', '?', 'back', 'br',
        'keys1', '0', '.', ' ', 'keys3', 'enter', 'br',
    ];
    var keys3 = [
        '[', ']', '{', '}', '<', '>', '&', '_', '%', '+', 'br',
        '|', '\\', '~', '-', '`', '/', '*', ':', ';', '&lsquo;', 'br',
        '!', '@', '^', '#', '$', '?', '=', '-', 'back', 'br',
        'keys1', '.', ' ', 'keys2', 'enter'
    ];
    var keys = keys1;
    function initiate() {
        for (var key in keys) {
            if (keys[key] === 'br' || keys[key] === 'BR') {
                $("#keyboard").append('<br>');
            }
            else {
                if (keys[key] === " ") {
                    $("#keyboard").append('<input class="button space rounded" type="button" value="' + keys[key] + '">');
                }
                else if (keys[key] === "caps" || keys[key] === "CAPS") {
                    $("#keyboard").append('<button class="rounded caps"><span class="glyphicon glyphicon-open"></span></button>');
                }
                else if (keys[key] === "back" || keys[key] === "BACK") {
                    $("#keyboard").append('<button class="rounded back"><span class="glyphicon glyphicon-remove"></span></button>');
                }
                else if (keys[key] === "enter" || keys[key] === "ENTER") {
                    $("#keyboard").append('<button class="rounded enter"><span class="glyphicon glyphicon-arrow-left"></span></button>');
                }
                else if (keys[key] === "keys1" || keys[key] === "KEYS1") {
                    $("#keyboard").append('<button class="rounded keys1">abc</button>');
                }
                else if (keys[key] === "keys2" || keys[key] === "KEYS2") {
                    $("#keyboard").append('<button class="rounded keys2">12#</button>');
                }
                else if (keys[key] === "keys3" || keys[key] === "KEYS3") {
                    $("#keyboard").append('<button class="rounded keys3">1/2</button>');
                }
                else {
                    $("#keyboard").append('<input class="button rounded" type="button" value="' + keys[key] + '">');
                }
            }
        }
    }
    initiate();
    $(document).on("click", ".button", function () {
        var altext = $("#text").val();
        var text = $(this).val();
        var newtext = text;
        $("#text").val(altext + newtext);
    });
    $(document).on("click", ".keys2", function () {
        $("#keyboard").text("");
        keys = keys2;
        initiate();
    });
    $(document).on("click", ".keys1", function () {
        $("#keyboard").text("");
        keys = keys1;
        initiate();
    });
    $(document).on("click", ".keys3", function () {
        $("#keyboard").text("");
        keys = keys3;
        initiate();
    });
    var index = 0;
    $(document).on("click", ".caps", function () {
        index++;
        $("#keyboard").text("");
        if ((index % 2) == 0) {
            for (var key in keys1) {
                var text = keys1[key];
                var low = text.toLowerCase();
                keys1[key] = low;
            }
        }
        else {
            for (var key in keys1) {
                var text = keys1[key];
                var upp = text.toUpperCase();
                keys1[key] = upp;
            }
        }
        initiate();
    });
    $(document).on("click", ".back", function () {
        var text = $("#text").val();
        var newText = text;
        newText = newText.substring(0, newText.length - 1);
        $("#text").val(newText);
    });
    $(document).on("click", ".enter", function () {
        var text = $("#text").val();
        var newText = text;
        newText += '\n';
        $("#text").val(newText);
    });
});
