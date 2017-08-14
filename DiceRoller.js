$(document).ready(function(){
	//Starts calculation when the button is clicked
	$('.roller').find('button').click(function(){
		
		var $data = $(this).parent().parent();//Get the TR tag of the button clicked
		var amount = parseInt($data.find('.amount').val());//Amount of dice to be rolled
		var modifier = parseInt($data.find('.modifier').val());//Amount to add to the roll
		var dieFaces = parseInt($data.find('.die').text());
		var log = $("textarea");
		var dieTotal = 0;
		var roll = 0;
		var sum = 0;

		log.append("(");
		for (i = 0; i < amount; i++){
			roll = Math.floor((Math.random() * (dieFaces)) + 1 );
			log.append(roll);
			dieTotal = dieTotal + roll;

			if (i !== amount-1){
				log.append(" + ");
			}
		}
		log.append(")");
		
		//Checking whether the modifier is positive or negative
		var mod = $data.find('.plus').prop('checked');
		if (mod){
			log.append(" + " + modifier);
			sum = dieTotal + modifier;
		}
		else{
			log.append(" - " + modifier);
			sum = dieTotal - modifier;
		}
		
		log.append(" = " + sum + "\n");
		$data.find('.sum').val(sum);
		
		log.scrollHeight(99999);
		log.scrollTop(99999);
	});
	
});