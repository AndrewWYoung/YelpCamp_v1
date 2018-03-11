// Required express app variables
var express 	= require("express"),
	app     	= express(),
	bodyParser 	= require("body-parser");
	port    	= 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://pixabay.com/get/eb30b00d21f7033ed95c4518b7444795ea76e5d004b0144395f6c17aa2ecb4_340.jpg"},
	{name: "Granite Hill", image: "https://pixabay.com/get/eb31b20a28f2093ed95c4518b7444795ea76e5d004b0144395f6c17aa2ecb4_340.jpg"},
	{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e036b80a20fc1c2ad65a5854ee4d459fe270e7c818b4134193f0c27ca6ec_340.jpg"}

]


app.get("/", function(req, res){
	res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){

	res.render("campgrounds.ejs", {campgrounds:campgrounds});

});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.listen(port, function(){
	console.log("Server started on port: " + port);
});

/* NOTE: Since YelpCamp is created on a local machine, the following code
**       is not needed. However, it will remain as a reference for later.
*/

/*
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("YelpCamp Server Started!");
});
*/