import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("grover-page")
export class GroverPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/grover.webp"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Grover Beach</h2>
					<h3>22 minutes from SLO</h3>
					<h3>Features</h3>
					<ul>
						<li>Cars allowed to drive on sand</li>
						<li>Bonfires allowed</li>
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