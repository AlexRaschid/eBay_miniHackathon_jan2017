$(document).ready(function(){
    var userInput = $("#userInputText").val(); 
    
    $("#userInputButton").click(function(){
        console.log( userInput );
        $().getJSON(
        "http://hackathon.liannsun.com/supermarkets?location="+ userInput +"&secret_key=spacecats",
        function(userInput){
            
            
            
        });
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})