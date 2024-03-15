import { css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";


@customElement("home-page")
export class HomePageElement extends App.View {

	render() {
		return html`
			<section class="homepage">
				<img class="homepage-img" src="/images/slo.jpeg"/>
				<div class="homepage-overlay"></div>
				<nav class="homepage-overlay-text">
					<h3><svg class="icon"><use href="/icons/attractions.svg#icon-restaurant"/></svg><a href="/app/restaurants">Restaurants</a></h3>
					<h3><svg class="icon"><use href="/icons/attractions.svg#icon-trail"/></svg><a href="/app/trails">Hiking Trails</a></h3>
					<h3><svg class="icon"><use href="/icons/attractions.svg#icon-beach"/></svg><a href="/app/beaches">Nearby Beaches</a></h3>
				</nav>
			</section>
		`
	}

	static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    css `
    	h3 {
    		font-size: 2rem;
    	}
    `
    ]

}