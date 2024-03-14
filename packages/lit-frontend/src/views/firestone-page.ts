import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("firestone-page")
export class FirestonePageElement extends App.View {

	render() {
		return html`
			<section class="page">
			<img class="page-img" src="/images/firestone.webp"/>
			<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Firestone Grill</h2>
					<h3>Price</h3>
					<p>$$-$$$</p>
					<h3>About</h3>
					<ul>
						<li>BBQ, Burgers, Sandwiches, and Salads</li>
						<li>Famous tri-tip sandwich</li>
					</ul>
					<h3>Locations</h3>
					<ul>
						<li>1001 Higuera St</li>
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