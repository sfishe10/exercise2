import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import "./preset-buttons";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";


@customElement("user-panel")
export class UserPanelElement extends LitElement {

  render() {
    return html`
      <ul>
        <li class="header">
          <slot name="name">Your Name</slot>
        </li>
        <li>
          <preset-buttons
            name="font-size"
            .options=${[12, 14, 16, 20, 24]} 
            value="16"
            @change=${this._selectFontSize}>
            Font Size
          </preset-buttons>
        </li>
        <slot></slot>
        <li>
          <slot name="logout">Sign out&hellip;</slot>
        </li>
      </ul>
    `;
  }

  static styles = 
  [ unsafeCSS(resetCSS), 
    unsafeCSS(pageCSS), 
    css`
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: white;
      color: var(--color-body);
      padding: 5px;
      width: min-content;
      box-shadow: var(--shadow-dropdown);
    }
    a {
      color: var(--color-accent);
      text-decoration: none;
    }
    li {
      white-space: nowrap;
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
  `];


  _selectFontSize(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    const body = document.documentElement;

    console.log("Selecting Font Size", ev);

    if (target) {
      const fontSize = target.value
        ? target.value.toString() + "px"
        : "initial";
      (body as HTMLElement).style.fontSize = fontSize;
    }
  }
}
