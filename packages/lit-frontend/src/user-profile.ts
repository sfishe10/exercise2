import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest.ts";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  render() {
    return html`
      <header>Welcome back, ${this.profile.name}!</header>
      <section>
        <h2>userid: ${this.profile.userid}</h2>
        <h3>email: ${this.profile.email}</h3>
      </section>
    `;
  }

  static styles = css`
    header {
      background-color: var(--color-main-heading-background);
      color: var(--color-main-heading);
      font-size: 64px;
      font-family: Allura, Kanit, "Trebuchet MS", Calibri, Roboto, sans-serif;

      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      padding: .5rem;
      gap: 2rem;
    }

    section {
      color: var(--color-body);
      background-color: var(--color-body-background);
      font-size: 20px;
      font-family: Alegreya, Merriweather, Baskerville, Cambria, serif;
      margin-left: 1rem;
    }
  `;


  _fetchData(path: string) {
    const x = serverPath(path);
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
          if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() { 
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }


}


