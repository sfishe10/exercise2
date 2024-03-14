import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import "../components/display-card";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("trails-page")
export class TrailsPageElement extends App.View {

	render() {
		return html`
			<section class="content">
				<section class="description">
					<h2>Trails to Hike</h2>
					<h3>Explore the natural beauty of the central coast!</h3>
					<p>San Luis Obispo County offers an extensive network of hiking trails that cater to outdoor enthusiasts of all skill levels, showcasing the region's diverse landscapes and natural beauty. From the rugged terrain of Bishop Peak, the highest of the Nine Sisters volcanic peaks, to the coastal vistas along the Montana de Oro State Park trails, hikers are treated to panoramic views of rolling hills, oak-studded valleys, and the sparkling Pacific Ocean. With its abundance of trails weaving through coastal bluffs, verdant valleys, and rugged peaks, San Luis Obispo County beckons adventurers to explore its scenic wonders on foot, promising unforgettable hiking experiences for all who venture forth.</p>
				</section>
				<section class="attraction-cards">
					<a href="./trails/bishop"><display-card><span slot="label">Bishop's Peak</span><span slot="detail">3.7 miles</span></display-card></a>

					<a href="./trails/madonna"><display-card><span slot="label">Madonna Mountain</span><span slot="detail">3.9-5.7 miles</span></display-card></a>

					<a href="./trails/p"><display-card><span slot="label">The P</span><span slot="detail">.9 miles</span></display-card></a>
				</section>
			</section>
		`
	}

	static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS)
    ]

}