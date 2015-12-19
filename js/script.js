$(document).ready(function(){
		var $TrainSouth=$('#TrainSouth');
		var $TrainSouthTime=$('#TrainSouthTime');
		var $TrainWest=$('#TrainWest');
		var $TrainWestTime=$('#TrainWestTime');
		var $BusSouth=$('#BusSouth');
		var $BusSouthTime=$('#BusSouthTime');
		var $BusNorth=$('#BusNorth');
		var $BusNorthTime=$('#BusNorthTime');

		
		$TrainSouth.flapper({
		width:20,
		chars_preset:'alphanum'
		});

		$TrainSouthTime.flapper({
		width:6,
		chars_preset:'alphanum'
		});

		$TrainWest.flapper({
		width:20,
		chars_preset:'alphanum'
		});

		$TrainWestTime.flapper({
		width:6,
		chars_preset:'alphanum'
		});

		$BusSouth.flapper({
		width:20,
		chars_preset:'alphanum'
		});

		$BusSouthTime.flapper({
		width:6,
		chars_preset:'alphanum'
		});

		$BusNorth.flapper({
		width:20,
		chars_preset:'alphanum'
		});

		$BusNorthTime.flapper({
		width:6,
		chars_preset:'alphanum'
		});

	function getData(){
		$.ajax(
		{
			type: "GET",
			url: "js/proxy.php",
			datatype: "json",
			success: prepJSON
		});
	}

	function logData(obj){
		$.each(obj, function() {
			  $.each(this, function(name, value) {
			    console.log(name + '=' + value);
			  });
		});
	}

	function prepJSON(data){
		updateFlapper(JSON.parse(data).ResponseData);
	}

	function checkData(){
		
	}

	function getMetrosSouth(json){
	}


	function getFirstMetroSouth(json){

		var a = 
		[
			json.Metros[0].StopAreaName.toUpperCase()+'  ',
			json.Metros[0].DisplayTime.toUpperCase()
		];
		return a;
	}

	function getFirstTrain(json){
		//logData(json.Trains[0]);
		var a = 
		[
			json.Trains[0].Destination.toUpperCase()+'  ',
			json.Trains[0].DisplayTime.toUpperCase()
		];
		return a;
	}

	function getSecondTrain(json){
		//logData(json.Trains[0]);
		var a = 
		[
			json.Trains[1].Destination.toUpperCase()+'  ',
			json.Trains[1].DisplayTime.toUpperCase()
		];
		return a;
	}

	function getFirstBus(json){
		//logData(json.Trains[0]);
		var a = 
		[
			json.Buses[0].Destination.toUpperCase()+'  ',
			json.Buses[0].DisplayTime.toUpperCase()
		];
		return a;
	}

		function getSecondBus(json){
		var a = 
		[
			json.Buses[1].Destination.toUpperCase()+'  ',
			json.Buses[1].DisplayTime.toUpperCase()
		];
		return a;
	}


	function updateFlapper(json){
		//var FirstMetro = getFirstMetroSouth(json);
		//var FirstTrain 	= getFirstTrain(json);
		//var SecondTrain = getSecondTrain(json);
		var FirstBus 	= getFirstBus(json);
		var SecondBus 	= getSecondBus(json);
		
		//var Metro1 		= FirstMetro[0];
		//var Metro1Time 	= FirstMetro[1];
/*
		var Train1 		= FirstTrain[0];
		var Train1Time 	= FirstTrain[1];
		var Train2 		= SecondTrain[0];
		var Train2Time 	= SecondTrain[1];
		*/

		var Bus1 		= FirstBus[0];
		var Bus1Time 	= FirstBus[1];
		var Bus2		= SecondBus[0];
		var Bus2Time 	= SecondBus[1];
/*
		$TrainSouth.val(Train1).change();
		$TrainSouthTime.val(Train1Time).change();

		$TrainWest.val(Train2).change();
		$TrainWestTime.val(Train2Time).change();
		*/

		$BusSouth.val(Bus1).change();
		$BusSouthTime.val(Bus1Time).change();

		$BusNorth.val(Bus2).change();
		$BusNorthTime.val(Bus2Time).change();


/*
	wtf?
		$("#flapper_container").
		append($('#TrainWest').clone().prop({id: "test"}));
		*/

	}

	/*
	getMetro(json, i)
	Input: 	json: json-objekt som har blivit parsat med JSON.parse()
			i: position i Metros[i], i = {1, ..., n}; n = Metros.len;
	Output:	En sträng-lista med all data om tunnelbanetåget på plats i.
	*/
	function getMetro(json, i){
		if(Metros.len > i){
			//return code 0 = fail. hantera i funktionsanropet.
			console.log("Felaktig input till getMetro(), i = "+i );
			return 0;
		}
		else{
			var Metro1 = json.ResponseData.Metros[i].StopAreaName.toUpperCase()+'  ';
			var output = [];

			for(m = 0; m<i; m++){
				//lägg på Metros[m] till output.
			}
		}

	}

	//getData();
//});


setInterval(function() {
   getData();
}, 5000);

});
