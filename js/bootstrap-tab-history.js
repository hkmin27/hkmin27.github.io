// bootstrap4 tab history
// Do not use with data-toggle='tab'
$(document).ready(function() {
    // when refresh or direct link
    var hash = location.hash;
    if (hash) {
        $('[href="' + hash + '"]').tab('show');
    } else {
        $('.nav-pills a:first').tab('show');
    }

    // when click the buttons
    // navigate to a tab when the history changes
    window.addEventListener("popstate", function(e) {
        var hash = location.hash;
        if (hash) {
            $('[href="' + hash + '"]').tab('show');
        } else {
            $('.nav-pills a:first').tab('show');
        }
    });
});