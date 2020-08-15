/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app, tableau, section, rangee, cellule;
		app = document.getElementById("app");
		tableau = app.appendChild(document.createElement("table"));
		tableau.style.borderCollapse = "collapse";
		for (let b = 0 ; b < 256; b += 51) {
			section = tableau.appendChild(document.createElement("tbody"));
			for (let g = 0 ; g < 256; g += 51) {
				rangee = section.appendChild(document.createElement("tr"));
				for (let r = 0 ; r < 256; r += 51) {
					cellule = rangee.appendChild(document.createElement("td"));
					cellule.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
				}
			}
		}
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
