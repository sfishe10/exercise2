import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import "../components/display-card";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("restaurants-page")
export class RestaurantPageElement extends App.View {

	render() {
		return html`
			<section class="content">
				<section class="description">
					<h2>Places to Eat</h2>
					<h3>Taste some of the best food California has to offer!</h3>
					<p>	San Luis Obispo boasts a vibrant culinary scene with a diverse array of flavors and cuisines. From charming cafes lining the streets of downtown to upscale restaurants overlooking the Pacific Ocean, you'll find dining unlike anywhere else. Locally sourced ingredients infuse freshness into every dish, reflecting the region's agricultural abundance. Whether indulging in farm-to-table delicacies, savoring authentic Mexican street tacos, or exploring innovative fusion eateries, San Luis Obispo invites visitors and locals to celebrate creativity, quality, and community.</p>
				</section>
				<section class="attraction-cards">
					<a href="./restaurants/scout"><display-card><span slot="label">Scout Coffee</span><span slot="detail">Breakfast</span></a>
					
					<a href="./restaurants/splash"><display-card><span slot="label">Splash Cafe</span><span slot="detail">Lunch</span></a>

					<a href="./restaurants/firestone"><display-card><span slot="label">Firestone Grill</span><span slot="detail">Dinner</span></a>
				</section>
			</section>
		`
	}
	
	static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS)
    ]

}
