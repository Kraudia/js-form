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

    var ul2 = $(this);
    $(this).on("click", "li", function(event) {
        var li = $(this);



        if (ul.hasClass("select__ul--active")) {
            var selectedLi = $("li.selected");
            ul.find(selectedLi).removeClass("selected");

            li.addClass("selected");
            ul.removeClass("select__ul--active");
        } else {
            ul.addClass("select__ul--active");

            if(ul.hasClass("select__ul--error")) {
                ul.removeClass("select__ul--error");
            }
        }

        if (ul.hasClass("select__ul--selected")) {
            var selectedLi = $("li.selected");
            if (ul.find(selectedLi).text()=="Miesiąc") {
                ul.removeClass("select__ul--selected").addClass("select__ul select__ul--error");
            } else {
                console.log("nieprawda, bo ", ul.find(selectedLi).text());
            }
        }
    });
};

$("#aktywne").start();