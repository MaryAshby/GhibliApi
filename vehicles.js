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
            make VehicleBar(vehicles);
                }
            function(err)
                {setBanner("No Transportation Today");
                })
            
