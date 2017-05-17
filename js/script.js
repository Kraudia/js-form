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
    var error = "<span class='error'>Wybierz miesiąc</span>";

    if (ul.hasClass("select__ul--error")) {
        ul.parent().append(error);
    }

    $(document).click(function(event) {
        if(!$(event.target).closest(ul).length) {
            ul.removeClass("select__ul--active");

            var selectedLi = $("li.selected");
            if (ul.find(selectedLi).text()=="Miesiąc") {
                ul.removeClass("select__ul--selected").addClass("select__ul select__ul--error");
            }
        }
    });

    $(this).on("click", "li", function(event) {
        var li = $(this);

        if (ul.hasClass("select__ul--error")) {
            ul.removeClass("select__ul--error");
            ul.siblings(".error").remove();
        }

        if (ul.hasClass("select__ul--active")) {
            var selectedLi = $("li.selected");
            ul.find(selectedLi).removeClass("selected");

            li.addClass("selected");

            if (ul.hasClass("select__ul")) {
                ul.removeClass("select__ul").addClass("select__ul--selected");
            }

            ul.removeClass("select__ul--active");
        } else {
            ul.addClass("select__ul--active");
        }

        if (ul.hasClass("select__ul--selected")) {
            var selectedLi = $("li.selected");
            if (ul.find(selectedLi).text()=="Miesiąc") {
                ul.removeClass("select__ul--selected").addClass("select__ul select__ul--error");
                ul.parent().append(error);
            }
        }
    });
};

$("#puste").start();
$("#wybrane").start();
$("#bledne").start();
$("#hover").start();
$("#aktywne").start();

