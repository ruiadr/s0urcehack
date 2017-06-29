
(function (json, input, img) {
    var map = {};
    $.getJSON (json, function (data) {
        $(data.Ewords.concat (data.Mwords).concat (data.Hwords)).each (function () {
            map[this[1]] = this[0];
        });
        $(input).keydown (function (e) {
            if (e.which === 16) {
                $(input).val (map[$(img).attr ('src').split ('/').pop ()]);
            }
        });
        alert ('GOD MODE ON !');
    });
})('/client/js/wordLibrary.json', '#tool-type-word', '#tool-type>img');

