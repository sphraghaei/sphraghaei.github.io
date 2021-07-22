(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

})(window);
(function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker(names[i]);
        }
        else {
            helloSpeaker(names[i]);
        }
    }

})();
