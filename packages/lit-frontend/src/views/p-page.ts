import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("p-page")
export class PPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/p.jpeg"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>The P</h2>
					<h3>Length</h3>
					<p>.9 miles (Out & Back)</p>
					<h3>Trailhead</h3>
					<ul>
						<li>Cal Poly campus</li>
					</ul>
					<h3>Features</h3>
					<ul>
						<li>Open year round</li>
						<li>A short, steep hike up to the "P" with beautiful views of the Cal Poly campus from the top</li>
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