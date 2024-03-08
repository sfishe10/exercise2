"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_profiles = __toESM(require("./profiles"));
var import_mongoConnect = require("./mongoConnect");
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var path = __toESM(require("path"));
var import_promises = __toESM(require("node:fs/promises"));
var import_auth = require("./auth");
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
const frontend = require.resolve("lit-frontend");
const dist = path.dirname(frontend);
console.log(`Serving ${frontend} from`, dist);
if (dist)
  app.use(import_express.default.static(dist.toString()));
app.use((0, import_cors.default)());
app.use(import_express.default.json());
app.post("/login", import_auth.loginUser);
app.post("/signup", import_auth.registerUser);
(0, import_mongoConnect.connect)("SLOApp");
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  import_profiles.default.get(userid).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.put("/api/profiles/:userid", (req, res) => {
  const { userid } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(userid, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.use("/app", (req, res) => {
  const indexHtml = `${dist}/index.html`;
  import_promises.default.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
