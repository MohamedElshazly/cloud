const blob = document.getElementsByClassName('blob')[0];
const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];

document.addEventListener('mousemove', (e) => {
	const {clientX, clientY} = e;
		
	blob.animate({
		left: `${clientX}px`,
		top: `${clientY}px`,
	}, {duration: 3000, fill: 'forwards'});
}
);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null; 
h1.onmouseover = e => {
	let iterations = 0;
	clearInterval(interval1);

	interval1 = setInterval(() => {
		h1.innerText = h1.innerText.split('').map((l, i) => i < iterations ? e.target.dataset.value[i] : letters[Math.floor(Math.random() * letters.length)]).join('');
		
		if(iterations >= e.target.dataset.value.length) {
			clearInterval(interval1);
		}
		iterations += 1 / 3;
	}
, 30);
}

let interval2 = null; 
p.onmouseover = e => {
	let iterations = 0;
	clearInterval(interval2);

	interval2 = setInterval(() => {
		p.innerText = p.innerText.split('').map((l, i) => i < iterations ? e.target.dataset.value[i] : letters[Math.floor(Math.random() * letters.length)]).join('');
		
		if(iterations >= e.target.dataset.value.length) {
			clearInterval(interval2);
		}
		iterations += 1 / 3;
	}
, 30);
}