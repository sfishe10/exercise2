import { css, html, unsafeCSS } from "lit";
import {
  customElement,
  property
} from "lit/decorators.js";
import { Profile } from "ts-models";
import * as App from "../app";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("user-profile")
export class UserProfileElement extends App.View {
  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

  render() {
    const {
      userid,
      name,
      email
    } = this.profile;

    return html`
      <section>
        <h2>Welcome back, ${name}!</h2>
        <h3>Username: ${userid}</h3>
        <h3>Email: ${email}</h3>
      </section>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    css`

    section {
      color: var(--color-body);
      background-color: var(--color-body-background);
      font-size: 20px;
      font-family: Alegreya, Merriweather, Baskerville, Cambria, serif;
      padding-left: 20px;
      padding-top: 20px;
    }
  `];

}


@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    const {
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

  _handleSubmit(event: Event) {
    event.preventDefault(); // prevent browser from submitting form data itself

    if (this.profile) {
      const target = event.target as HTMLFormElement;
      const formdata = new FormData(target);
      let entries = Array.from(formdata.entries())
        .map(([k, v]) => (v === "" ? [k] : [k, v]));

      const json = Object.fromEntries(entries);

      console.log("Submitting Form", json);

      this.dispatchMessage({
        type: "ProfileSaved",
        userid: this.profile?.userid,
        profile: json as Profile
      });
    }
  }
}


