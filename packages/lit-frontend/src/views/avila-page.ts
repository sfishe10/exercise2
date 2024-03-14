import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("avila-page")
export class AvilaPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/avila.jpeg"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Avila Beach</h2>
					<h3>16 minutes from SLO</h3>
					<h3>Features</h3>
					<ul>
						<li>Plaza with shops and restaurants along the shore</li>
						<li>Multiple beaches and piers</li>
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