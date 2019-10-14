var setBanner = function(message)
             {
             d3.select(#banner)
                .text("The Vehicles of Ghibli");
             }

var displayInfo = function(vehicle)
                {
                  clearInfo()
                }

var makeVehicleBar=function(vehicles)
              {
                d3.select("#fan_art")
                  .selectAll("img")
                  .data(vehicles)
                  .enter()
                  .attr("src", function(vehicle)
                        {
                         return vehicle.img;
                          }
                  .on ("click", function(d)
                        {
                         displayInfo(d);
                })
             
var vehiclesPromise = d3.json("https://ghibliapi.herokuapp.com/vehicles")
            vehiclesPromise.then(
            function(vehicles)
                {
            setBanner("The Vehicles of Ghibli");
            console.log("Vehicles", vehicles);
            makeVehicleBar(vehicles);
                }
            function(err)
                {setBanner("No Transportation Today");
                })
 
var info = box.append("div")
              .attr("class","info);
           info.append("div".text("name:" + name)
           info.append("div".text("description:" + description)
           info.append("div".text("vehicle class:" + vehicle_class)   
           info.append("div".text("lenght:" + length)
           info.append("div".text("pilot:" + pilot)
           info.append("div".text("films:" + films)
                
                
                      
  
            
