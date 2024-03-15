import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("display-card")
export class DisplayCardElement extends LitElement {
	@property({type: String}) imagePath = '';

	@property({type: String}) linkPath = '';
	
	render() {
		return html`
		<a href=${this.linkPath}>
			<div class="card" style="background-image: url(${this.imagePath}">
				<div class="overlay">
					<div class="text">
						<h4><slot name="label">*** Label ***</slot></h4>
						
					</div>
				</div>
			</div>
		</a>
		`;
	}

	static styles = css`
	.card {
		position: relative;
		display: grid;
		box-sizing: border-box;
		border: 1px solid var(--color-accent);
		border-radius: 10px;
		background-size: cover;
		background-position: center;
		width: 200px;
		height: 150px;
		overflow: hidden;

		grid-template-rows: [top] 1fr [text] 2fr;

	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
	    background-color: rgba(255, 255, 255, 0.3);
	    // grid-row: top / text;
	}

	.text {
		z-index: 1;
		background-color: var(--color-main-heading);
		
	}

	h4 {
		// color: var(--color-main-heading-background);
		color: var(--color-accent);
		font-size: 1.5rem;
		margin-left: 10px;
		
	}

	// p {
	// 	background-color: rgba(255, 255, 255, 0.8);
	// 	padding: 10px;
	// 	line-height: 1em;
	// }
	`
}