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
    var error = '<span class="error">Wybierz miesiąc</span>';

    //arrows
    var arrowDown =
        '<img src="./assets/down-dark.png" align="right" style="height: 20px;"/>';

    var arrowUp =
        '<img src="./assets/up-dark.png" align="right" style="height: 20px;"/>';


    if (ul.hasClass("select__ul--error")) {
        ul.parent().append(error);
    }

    ul.find("li").find('img').remove();

    if (ul.hasClass("select__ul--selected")) {
        var selectedLi = $("li.selected");
        if (ul.hasClass("select__ul--active")) {

            ul.children("li:nth-child(2)").append(arrowUp);
        } else {
            ul.find(selectedLi).append(arrowDown);
        }
    } else {
        ul.find("li:first-of-type").append(arrowDown);
    }

    $(document).click(function(event) {
        if(!$(event.target).closest(ul).length) {
            ul.removeClass("select__ul--active");

            if (!ul.hasClass("select__ul--disabled")) {
                var selectedLi = $("li.selected");
                if (ul.find(selectedLi).length) {
                    console.log("tak");
                    if (ul.find(selectedLi).text()=="Miesiąc") {
                        ul.removeClass("select__ul--selected").addClass("select__ul select__ul--error");
                    }
                } else {
                    console.log("nope");
                    ul.removeClass("select__ul--selected").addClass("select__ul select__ul--error");
                    ul.siblings(".error").remove();
                    ul.parent().append(error);
                }
            }



            ul.find("li").find('img').remove();
            if (ul.hasClass("select__ul--selected")) {
                var selectedLi = $("li.selected");
                ul.find(selectedLi).append(arrowDown);
            } else {
                ul.find("li:first-of-type").append(arrowDown);
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
            ul.find("li").find('img').remove();

            var selectedLi = $("li.selected");
            ul.find(selectedLi).removeClass("selected");
            ul.find(selectedLi).find('img').remove();

            if (ul.hasClass("select__ul")) {
                ul.removeClass("select__ul").addClass("select__ul--selected");
            }

            ul.removeClass("select__ul--active");
            li.addClass("selected").append(arrowDown);
        } else {
            ul.find("li").find('img').remove();

            ul.children("li:nth-child(2)").append(arrowUp);

            ul.find(selectedLi).removeClass("selected");
            ul.find(selectedLi).find('img').remove();
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

$("#wylaczone").start();
$("#wylaczonewypelnione").start();
$("#puste").start();
$("#wybrane").start();
$("#bledne").start();
$("#hover").start();
$("#aktywne").start();

