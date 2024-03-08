import { html } from "lit";
import { customElement } from "lit/decorators.js";
// MVU app
import * as App from "../app";
import routes from "../routes";
import update from "../update";
// components
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/slo-header";

@customElement("slo-app")
export class SLOAppElement extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
      <auth-required>
        <slo-header></slo-header>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }
}