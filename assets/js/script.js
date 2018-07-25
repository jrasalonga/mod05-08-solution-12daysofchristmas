let daysList = ["First day","Second day","Third day","Fourth day","Fifth day","Sixth day","Seventh day","Eight day","Nineth day","Tenth day","Eleventh day","Twelve day"];
let giftList = ["A Partridge in a Pear Tree",
"Two turtle doves ",
"Three french hens ",
"Four colly birds ",
"Five gold rings ",
"Six geese a-laying ",
"Seven swans a-swimming ",
"Eight maids a-milking ",
"Nine ladies dancing ",
"Ten lords a-leaping ",
"Eleven pipers piping ",
"Twelve drummers drumming "];

let currentDay = 0;
console.log(currentDay);

//console.log(daysList[0]);
//console.log(giftList[0]);

document.querySelector('#day'+currentDay).textContent = daysList[0];
document.querySelector('#gift'+currentDay).textContent = giftList[0];

function showNextday () {
	currentDay = currentDay + 1;
	//console.log(currentDay);
	document.querySelector('#stanza'+currentDay).style.display = 'block';
	//console.log('#stanza1'+currentDay);
	document.querySelector('#day'+currentDay).textContent = daysList[currentDay];
	
	let gifts = '';
	for (let i = currentDay; i >= 0; i--) {
		//console.log(giftList[i]);
		if (i === 1)
			gifts = gifts + giftList[i] + ', and';
		else
			gifts = gifts + giftList[i] + ' ';
	}
	document.querySelector('#gift'+currentDay).textContent = gifts;

		if (currentDay === 11) {
			document.querySelector('#nextButton').disabled = true;
		}

}