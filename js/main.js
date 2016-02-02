function setCurrentlyAge () {
    var date = new Date();

    $('.currentlyAge').text(date.getFullYear() - 1984);
}

function setLanguageOnLoad (browserLanguage) {
    if (browserLanguage === 'pt-BR') {
        $('#portuguese').show();
    } else {
        $('#english').show();
    }
}

function changeLanguage () {
    $('#menu a').click(function () {
        $('#menu a').removeClass('currentlyLanguage');
        $(this).addClass('currentlyLanguage');
        
        if ($(this).attr('data-lang') === 'pt-BR') {
            $('#english').hide();
            $('#portuguese').show();
        } else {
            $('#portuguese').hide();
            $('#english').show();
        }
    });
}

$(document).ready(function () {
    setCurrentlyAge();
    setLanguageOnLoad();
    changeLanguage();
});