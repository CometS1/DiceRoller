$(document).ready(function(){
	//Starts calculation when the button is clicked
	$('.roller').find('button').click(function(){
		
		var $data = $(this).parent().parent();//Get the TR tag of the button clicked
		var amount = parseInt($data.find('.amount').val());//Amount of dice to be rolled
		var modifier = parseInt($data.find('.modifier').val());//Amount to add to the roll
		var dieFaces = parseInt($data.find('.die').text());
		var dieTotal = 0;
		var roll = 0;
		var sum = 0;
		for (i = 0; i < amount; i++){
			roll = Math.floor((Math.random() * (dieFaces)) + 1 );
			dieTotal = dieTotal + roll;
		}
		
		//Checking whether the modifier is positive or negative
		var mod = $data.find('.plus').prop('checked');
		if (mod){
			sum = dieTotal + modifier;
		}
		else{
			sum = dieTotal - modifier;
		}
		
		$data.find('.sum').val(sum);
		
		
	});
	
});