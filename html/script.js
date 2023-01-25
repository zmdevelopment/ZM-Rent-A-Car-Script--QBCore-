$(function() {

    function display(bool) {
        if (bool) {
            $("html").show();
        } else {
            $("html").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                document.getElementById("car_image").innerHTML="";
                document.getElementById("nameprice_car").innerHTML="";
                document.getElementById("rent_btn").innerHTML="";

                car_names = item.car_names;
                car_prices = item.car_prices;


                
                

                document.getElementById("btn1").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML="";
                    document.getElementById("nameprice_car").innerHTML="";

                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/asea-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[0]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[0]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn1" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn1").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;

                        car_name = "asea";
                        number = 1;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });




                    return
                });
                
                document.getElementById("btn2").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/asbo-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[1]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[1]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn2" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn2").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "asbo";
                        number = 2;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn3").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Buffalo-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[2]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[2]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn3" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn3").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "buffalo";
                        number = 3;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn4").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Pfister811-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[3]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[3]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn4" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn4").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "pfister811";
                        number = 4;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn5").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Baller4-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[4]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[4]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn5" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn5").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "baller4";
                        number = 5;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn6").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/T20-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[5]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[5]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn6" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn6").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "t20";
                        number = 6;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn7").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Blazer-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[6]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[6]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn7" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn7").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "blazer";
                        number = 7;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });

                    return
                });

                document.getElementById("btn8").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Bf400-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[7]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[7]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn8" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn8").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "bf400";
                        number = 8;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });


                    return
                });

                document.getElementById("btn9").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
        
                    
                    document.getElementById("car_image").innerHTML='<img style="position: absolute;left: -50px;bottom: 140px;" src="img/Everon-c.png" alt=""></img>';
                    document.getElementById("nameprice_car").innerHTML='<p class="selected_car"  >Car Model : '+car_names[8]+'</p>'+
                    '<p class="selected_car1" >Car Price : '+car_prices[8]+'</p>';
                    document.getElementById("rent_btn").innerHTML='<img id="rent_btn9" class="rent_btnn" src="img/rent_btn.png" alt="">';

                    document.getElementById("rent_btn9").addEventListener("click", function(event){
                        event.preventDefault();
                        event.currentTarget.disabled = true;
    
                        car_name = "everon";
                        number = 9;
    
                        $.post('http://zm_rentcar/rentcar', JSON.stringify({
                            car_name : car_name,
                            number : number,
                        }));
    
    
                        return
                    });


                    return
                });

                document.getElementById("btn_return").addEventListener("click", function(event){
                    event.preventDefault();
                    event.currentTarget.disabled = true;
                    document.getElementById("car_image").innerHTML='';
                    document.getElementById("nameprice_car").innerHTML="";
                    document.getElementById("rent_btn").innerHTML="";
        
                    $.post('http://zm_rentcar/returncar', JSON.stringify({
                    }));


                    return
                });

                display(true)
            } else {
                display(false)
            }
            document.onkeyup = function (data) {
                if (data.which == 27  ) {
                    $.post('http://zm_rentcar/exit', JSON.stringify({}));
                    return
                }
            };


        }
    })
})