import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("bishop-page")
export class BishopPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/bishop.webp"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Bishop's Peak</h2>
					<h3>Length</h3>
					<p>3.7 miles (Out & Back)</p>
					<h3>Trailheads</h3>
					<ul>
						<li>Patricia Drive</li>
						<li>Highland Drive</li>
						<li>Foothill Road</li>
					</ul>
					<h3>Features</h3>
					<ul>
						<li>Open year round</li>
						<li>Includes forest areas, rock climbing area, rocky paths</li>
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