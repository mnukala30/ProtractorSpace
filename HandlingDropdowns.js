describe('handling dropdowns',function(){

	function dropdown(a,b,c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item){
			
			 item.getAttribute("value").then(function(values){
	
			if(values==c){
				
				item.click();
				browser.sleep(5000);
			}
			
			 })
			
		})	
		element(by.id("gobutton")).click();
		
	}
	it('selection of randomn value',function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		dropdown(3,5,"MULTIPLICATION");
		dropdown(10,5,"DIVISION");
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
	})
	
	});
	
	
});	

