import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("display-card")
export class DisplayCardElement extends LitElement {
	
	render() {
		return html`
		<div>
		<h4><slot name="label">*** Label ***</slot></h4>
		<p><slot name="detail">*** Detail ***</slot></p>
		</div>
		`;
	}

	static styles = css`
	div {
		box-sizing: border-box;
		border: 1px solid var(--color-accent);
		border-radius: 10px;
		background-color: var(--color-main-heading);
		width: 200px;
		height: 150px;
		padding: 10px;
		line-height: .75rem

	}

	h4 {
		color: var(--color-main-heading-background);
		font-size: 1.5rem;
		line-height: 1.2rem;
	}
	`
}