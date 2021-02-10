$("document").ready(function() {
     $(".overlay").click(function() {
            $(".overlay").hide();
        });
    });

$("document").ready(function() {
    $(".work").hover(function() {
            $(".imgw").toggle();
           });
    $(".about").hover(function() {
        $(".imga").toggle();
        });
});