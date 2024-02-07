import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PresetButtonsElement } from "./preset-buttons";
import { DropDownElement } from "./drop-down";

@customElement("user-panel")
export class UserPanelElement extends LitElement {

  render() {
    return html`
      <drop-down>
            Menu
            <ul slot="menu">
              <li><a href="profile.html">View Profile</a></li>
              <li>
                <preset-buttons
                  name="font-size"
                  .options=${[14, 16, 20, 24, 28]}
                  value="20"
                  @change=${this._selectFontSize}>
                  Font Size
                </preset-buttons>
              </li>
              <li>Sign Out</li>
            </ul>
          </drop-down>
    `;
  }

  static styles = css`
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
    img {
      display: inline;
      height: var(--size-icon-large);
    }
  `;


  _selectFontSize(ev: InputEvent) {
    const target = ev.target as PresetButtonsElement;
    const body = document.body;

    console.log("Selecting Font Size", ev);

    if (target) {
      const fontSize = target.value
        ? target.value.toString() + "px"
        : "initial";
      body.style.fontSize = fontSize;
    }
  }
}