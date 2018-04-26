var app = angular.module("akcApp", ['ngMessages']);

//function to reload page after conforming form
function modal2dismiss(){
	location.reload();
}

//User information controller
app.controller('userCtrl', function($scope){

	$scope.sendData = function() {
		var name = $scope.fname +" "+ $scope.lname;
		var email = $scope.email;
		var phone = $scope.phone;
		var address = $scope.n +", "+ $scope.rue +", "+ $scope.city +", "+ $scope.code;
		var bdate = $scope.birthdate;

//Error messages
		var errMsgPhone = "Hey there, you forgot to enter Phone number. Please select the country code";
		var errMsgEmail = "Hey there, you forgot to enter Email";
		var errMsgBdate = "Hey there, you forgot to enter Birthdate";

//form validation condition
		if (phone == null){
			document.getElementById('infoMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgPhone+'</div>';
			document.getElementById('infoButton2').style.display="inline";
		}

		if (email == null){
			document.getElementById('infoMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgEmail+'</div>';
			document.getElementById('infoButton2').style.display="inline";
		}

		if (bdate == null){
			document.getElementById('infoMsg').innerHTML='<div class="alert alert-danger center-block text-center">'+errMsgBdate+'</div>';
			document.getElementById('infoButton2').style.display="inline";
		}

		$scope.userInfo = {
			"name": name,
			"email": email,
			"address": address,
			"phone" : phone,
			"birthdate": bdate
		}

		var ot = $scope.userInfo;

		if(phone != null && email != null && bdate != null){
			document.getElementById('infoMsg').innerHTML='<div class="alert alert-success center-block text-center"><strong>Congratulation!!! </strong></br>User Information: '+JSON.stringify(ot)+'</div>';
			document.getElementById('infoButton2').style.display="none";
			document.getElementById('infoButton').style.display="inline";
		}
	};
	function selectCode(){
		if(phone == null){
			document.getElementById('infoMsg').innerHTML='<div class="alert alert-danger center-block text-center">Please select country code.</div>';
			document.getElementById('infoButton2').style.display="inline";
		}
	}
});
