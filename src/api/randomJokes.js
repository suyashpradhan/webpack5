/** @format */
const containerEl = document.getElementById('container');
const heading = document.createElement('h1');

export function randomJokes() {
	window.addEventListener('load', () => {
		fetch('https://api.chucknorris.io/jokes/random')
			.then((r) => r.json())
			.then((data) => {
				heading.innerHTML = data.value;
				containerEl.appendChild(heading);
			})
			.catch((err) => console.log(err));
	});
}
