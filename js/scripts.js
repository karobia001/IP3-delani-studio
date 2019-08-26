 $(document).ready(function() {
     $("#design-image").click(function(){
        $("#design-image").toggle();
         $("#design-info").toggle();
     });     $("#design-info").click(function(){
         $("#design-image").toggle();
          $("#design-info").toggle();
     });
     $("#dev-image").click(function(){
         $("#dev-image").toggle();
          $("#dev-info").toggle();
     });
    $("#dev-info").click(function(){
         $("#dev-image").toggle();
          $("#dev-info").toggle();
     });
     $("#prod-image").click(function(){
         $("#prod-image").toggle();
          $("#prod-info").toggle();
     });
     $("#prod-info").click(function(){
        $("#prod-image").toggle();
         $("#prod-info").toggle();
    });

     $("#image1").hover(function(){
         $(".info1").toggle(200);
     });
     $("#image2").hover(function(){
        $(".info2").toggle(200);
    });
    $("#image3").hover(function(){
        $(".info3").toggle(200);
    });
    $("#image4").hover(function(){
        $(".info4").toggle(200);
    });
    $("#image5").hover(function(){
        $(".info5").toggle(200);
    });
    $("#image6").hover(function(){
        $(".info6").toggle(200);
    });
    $("#image7").hover(function(){
        $(".info7").toggle(200);
    });
    $("#image8").hover(function(){
        $(".info8").toggle(200);
    });
   
});



function valid(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("textarea").value;

    if(name === ""){
        alert("Insert name!");

    }else if(email === ""){
        alert("Insert email!");
    }else if(text === ""){
        alert("no message to be submitted");
    }else{
        alert("We have recieved you message dear " + name);
    };

};
