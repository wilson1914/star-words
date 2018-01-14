var app = angular.module("lab13Module", []); 

	app.controller('lab13Controller', function($scope){

	var	words = ['Lightsaber', 'Force', 'Yoda', 'Dagoba', 'Rebels', 'Snoke', 'Rey', 'Jedi', 'Poe', 'Sith'];
	var	wordsDec = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	var	moreWords = ['Mace Windu', 'Grey Jedi', 'Darth Vader', 'Storm Trooper', 'Death Star', 'Kylo Ren', 'Dark Side', 'Light Side', 'Its a Trap!', 'Ultimate Power'];
		// $scope.moreWordsDec = ['six', 'seven', 'eight', 'nine', 'ten'];
		$scope.newWords = [];


		$scope.addWords=function() {
			var word={};
			word.stuffing=words[Math.floor(Math.random() * words.length)];
			// word.deco="";
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addWordsDec=function() {
			var word={};
			word.stuffing=words[Math.floor(Math.random() * wordsDec.length)];
			word.deco=wordsDec[Math.floor(Math.random() * wordsDec.length)];
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addMoreWords=function() {
			var word={};
			word.stuffing=moreWords[Math.floor(Math.random() * moreWords.length)];
			// word.deco="";
			$scope.newWords.push(word);
			console.log(word);

		};

		$scope.addMoreWordsDec=function() {
			var word={};
			word.stuffing=moreWords[Math.floor(Math.random() * wordsDec.length)];
			word.deco=wordsDec[Math.floor(Math.random() * wordsDec.length)];
			$scope.newWords.push(word);	
			console.log(word);

		};


	});