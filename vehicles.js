var setBanner = function(message)
             {
             d3.select(#banner)
                .text("The Vehicles of Ghibli");
             }
             
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
                        
var displayInfo = function(vehicle)
                {
                  clearInfo()
                }
                
                
                      
  
            
