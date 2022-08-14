/** @format */

export function randomJokes() {
	window.addEventListener('load', () => {
		fetch('https://api.chucknorris.io/jokes/random')
			.then((r) => r.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	});
}
