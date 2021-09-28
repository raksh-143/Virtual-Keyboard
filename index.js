$(function () {
    var keys = [
        '~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', '+ =', '<- backspace', 'br',
        'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{ [', '} ]', '| \\', 'br',
        'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', '&ldquo; &lsquo;', '<- enter', 'br',
        'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '< ,', '> .', '? /', 'pause shift', 'br',
        'ctrl', 'fn', 'windows', 'alt', ' ', 'alt', 'ctrl', '<', '^', '>', 'br'
    ];
    for (var key in keys) {
        if (keys[key] === 'br') {
            $("#keyboard").append('<br>');
        }
        else {
            if (keys[key] === " ") {
                $("#keyboard").append('<input class="button space rounded" type="button" value="' + keys[key] + '">');
            }
            else {
                $("#keyboard").append('<input class="button rounded" type="button" value="' + keys[key] + '">');
            }
        }
    }
});
