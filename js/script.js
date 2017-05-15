var months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
];

var ids = [
    "wylaczone",
    "wylaczonewypelnione",
    "puste",
    "wybrane",
    "bledne",
    "hover",
    "aktywne"
];

$.fn.start = function() {
    var ul = $(this);

    for (var i=0; i<months.length; i++) {
        var li =  document.createElement("li");
        li.textContent = months[i];
        ul.append(li);
    }

    //click on select menu
    $(this).on("click", "li", function(event) {
        ul.toggleClass("active");
    });
};

//run
for (var i=0; i<ids.length; i++) $("#"+ids[i]).start();
