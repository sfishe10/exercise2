import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("splash-page")
export class SplashPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/splash.jpeg"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Splash Cafe</h2>
					<h3>Price</h3>
					<p>$-$$</p>
					<h3>About</h3>
					<ul>
						<li>Lunch or brunch options including seafood, sandwiches, tacos, and soups</li>
						<li>Famous for their clam chowder in a sourdough bread bowl</li>
					</ul>
					<h3>Locations</h3>
					<ul>
						<li>1491 Monterey St</li>
						<li>(Pismo) 197 Pomeroy Ave</li>
					</ul>
				</section>
			</section>
		`
	}
	
	static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS)
    ]
}