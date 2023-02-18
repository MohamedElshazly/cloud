const blob = document.getElementsByClassName('blob')[0];


//make blob follow mouse movement
document.addEventListener('mousemove', (e) => {
	const {clientX, clientY} = e;
		
	blob.animate({
		left: `${clientX}px`,
		top: `${clientY}px`,
	}, {duration: 3000, fill: 'forwards'});
}
);