//var __jquery = jQuery.noConflict();

$(document).ready(function() {

$(document).on("click", "a.fileDownloadSimpleRichExperience", function () {
    $.fileDownload($(this).prop('href'), {
        preparingMessageHtml: "We are preparing your report, please wait...",
        failMessageHtml: "There was a problem generating your report, please try again."
    });
    return false; //this is critical to stop the click event which will trigger a normal file download!
});   

});