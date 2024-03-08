import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("madonna-page")
export class MadonnaPageElement extends App.View {

	render() {
		return html`
			<section class="page">
				<img class="page-img" src="/images/madonna.jpeg"/>
				<div class="page-overlay"></div>
				<section class="page-overlay-text">
					<h2>Madonna Mountain</h2>
					<h3>Length</h3>
					<p>3.9-5.7 miles (Loop)</p>
					<h3>Trailheads</h3>
					<ul>
						<li>Charles A and Mary R Maino Open Space</li>
					</ul>
					<h3>Features</h3>
					<ul>
						<li>Lemon Grove Loop trail</li>
						<li>Mission Prep High School "M" trail</li>
						<li>Trail to the top</li>
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