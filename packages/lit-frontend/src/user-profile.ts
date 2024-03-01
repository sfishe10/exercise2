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
      <header>Welcome back, ${this.profile?.name}!</header>
      <section>
        <h2>Username: ${this.profile?.userid}</h2>
        <h3>Email: ${this.profile?.email}</h3>
      </section>

    `;
  }

  static styles = [css`
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
      margin-left: 20px;
    }
  `];


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


@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    const {
      userid,
      name,
      email
    } = (this.profile || {}) as Profile;
    return html`
    <div>
    <h2>Edit Profile</h2>
    <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${name} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" value=${email} />
        </label>
        <button type="submit">Submit</button>
    </form> 
    </div>`;
  }

  static styles = [...UserProfileElement.styles, css`
    div {
      margin-left: 20px;
      box-sizing: border-box;
      border: 1px solid var(--color-accent);
      border-radius: 20px;
      background-color: var(--color-main-heading);
      width: 50%;
    }
    h2 {
      margin-left: 20px;
    }
    form {
      margin-left: 20px;
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    input, button {
      font: inherit;
      line-height: inherit;
      margin: .25em;
    }
    button {
      grid-column: 2;
    }

    `];

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]));
    const json = Object.fromEntries(entries);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }
}


