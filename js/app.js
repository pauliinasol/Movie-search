console.log('I am ready');

$(document).ready(function() {
    $('#search').mouseenter(function() {
        $('#search').fadeTo('fast', 0.5);
    });
    $('#search').mouseleave(function() {
        $('#search').fadeTo('fast', 1.0);
    });
});

$("#search").click(function() {
    console.log("Btn Clicked");

    $.ajax({
        url: 'http://omdbapi.com/?s=' + $('.searchbox').val(),
        method: 'get'
    }).done(function(movies) {

        movies.Search.forEach(function(movie) {
            var $newMovie = $('<p>').text(movie.Title).fadeIn("slow");
            $newMovie.click(function() {
                $(this).hide("slow");
            });
            $('.movies').append($newMovie);

        });
    });
});
