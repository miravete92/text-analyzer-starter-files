function main(){
	$(".js-form").submit(function(event){
		event.preventDefault();
		var text = $(this).find(".js-textarea").val();
		console.log(text);

		var wordArray = text.trim().split(' ');
		var uniqueWords = [];
		var wordLengthSum = 0;

		for(var i = 0; i<wordArray.length;i++){
			wordLengthSum+=wordArray[i].length;
			if(uniqueWords[wordArray[i]]){
				uniqueWords[wordArray[i]]++;
			}
			else{
				uniqueWords[wordArray[i]]=0;
			}
		}
		$(".text-report").removeClass("hidden");
		$(".js-wc").text(wordArray.length+"");
		$(".js-uwc").text(Object.keys(uniqueWords).length+"");
		$(".js-awc").text((wordLengthSum/wordArray.length).toFixed(2)+" characters");

	});
}
main();