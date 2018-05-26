$(function(){

    $("#teams-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url: "https://radiant-lake-28462.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Teams</h3>").append(JSON.stringify(data));
        });
    });

    $("#employees-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://radiant-lake-28462.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Employees</h3>").append(JSON.stringify(data));
        });
    });

    $("#projects-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://radiant-lake-28462.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Projects</h3>").append(JSON.stringify(data));
        });
    });

    $("#positions-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "https://radiant-lake-28462.herokuapp.com/positions",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Positions</h3>").append(JSON.stringify(data));
        });
    });
});