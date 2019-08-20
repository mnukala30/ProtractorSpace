describe('Chain locators demo',function() {  

function add(a,b){
	element(by.model("first")).sendKeys(a);
	element(by.model("second")).sendKeys(b);
	element(by.id("gobutton")).click();
	browser.sleep(5000);
}
it('Open Angular js website',function() {
browser.get('http://juliemr.github.io/protractor-demo/');
add(3,6);
add(7,9);
element.all(by.repeater("result in memory")).each(function(item) {
	item.element(by.css("td:nth-child(3)")).getText().then(function(text){
		console.log(text);
	})
})
});

});