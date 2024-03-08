import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import "../components/display-card";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("beaches-page")
export class BeachesPageElement extends App.View {

	render() {
		return html`
			
			<section class="content">
				<section class="description">
					<h2>Nearby Beaches</h2>
					<h3>Relax in front of a beautiful coastal view!</h3>
					<p>San Luis Obispo County is home to a variety of beautiful beaches along California's central coast. From the popular expanse of Pismo Beach to the rugged cliffs of Shell Beach, each offers its own unique appeal. Avila Beach provides a relaxed atmosphere with opportunities for water activities, while Morro Bay boasts a charming harbor overlooked by the iconic Morro Rock. Whether you're seeking sunbathing, water sports, or simply a scenic stroll, the beaches of SLO County offer diverse experiences for visitors and locals alike.</p>
				</section>
				<section class="attraction-cards">
					<a href="./beaches/pismo"><display-card><span slot="label">Pismo Beach</span><span slot="detail">18 minutes</span></display-card></a>

					<a href="./beaches/grover"><display-card><span slot="label">Grover Beach</span><span slot="detail">22 minutes</span></display-card></a>

					<a href="./beaches/avila"><display-card><span slot="label">Avila Beach</span><span slot="detail">16 minutes</span></display-card></a>
				</section>
				
			</section>
		`
	}

	static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS)
    ]

}