$(document).ready(function(){
    var userInput = $("#userInputText").val(); 
    
    $("#userInputButton").click(function(){
        console.log( userInput );
        $.getJSON(
        "http://hackathon.liannsun.com/supermarkets?location="+ userInput +"&secret_key=spacecats",
        function(results){
            console.log(results);
            
           for(var i = 0; i < results.length; i++){
               $("#apiInfoDump").append("<li>------------------------------</li>");
               $("#apiInfoDump").append("<li>" + results[i]["name"] + "</li>");
               $("#apiInfoDump").append("<li>" + results[i]["formatted_address"] + "</li>");
               $("#apiInfoDump").append("<li>------------------------------</li>");
           }
            
            
            
        });
        
        
        
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
})