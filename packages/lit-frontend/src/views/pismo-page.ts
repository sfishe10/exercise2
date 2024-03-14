import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("pismo-page")
export class PismoPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/pismo.jpeg"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Pismo Beach</h2>
					<h3>18 minutes from SLO</h3>
					<h3>Features</h3>
					<ul>
						<li>Boardwalk with food trucks and views of the coast</li>
						<li>Shops, arcades and restaurants leading to the beach</li>
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