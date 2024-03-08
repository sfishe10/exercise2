import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("scout-page")
export class ScoutPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/scout.webp"/>
				<div class="page-overlay"></div>
					<section class="page-overlay-text">
						<h2>Scout Coffee</h2>
						<h3>Price</h3>
						<p>$-$$</p>
						<h3>About</h3>
						<ul>
							<li>Coffee, Lattes, Teas, and other hot and cold drinks</li>
							<li>A large variety of pastries both savory and sweet</li>
						</ul>
						<h3>Locations</h3>
						<ul>
							<li>880 Foothill Blvd</li>
							<li>1130 Garden St</li>
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