$(function()
{
    $(".label .checkbox").click(function()
    {
        if($(this).prop("checked"))
        {
            $("body").addClass("dayBackground");
        }
        else
        {
            $("body").removeClass("dayBackground");
        }
    });
});