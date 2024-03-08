import profiles from "./profiles";
import { Profile } from "./models/profile";
import { connect } from "./mongoConnect";
import express, { Request, Response } from "express";
import cors from "cors";
import * as path from "path";
import fs from "node:fs/promises";
import { loginUser, registerUser } from "./auth";

const app = express();
const port = process.env.PORT || 3000;

const frontend = require.resolve("lit-frontend");
const dist = path.dirname(frontend);

console.log(`Serving ${frontend} from`, dist);

if (dist) app.use(express.static(dist.toString()));

app.use(cors());
app.use(express.json());

app.post("/login", loginUser);
app.post("/signup", registerUser);

connect("SLOApp");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.use("/app", (req, res) => {
  const indexHtml = `${dist}/index.html`;
 fs.readFile(indexHtml, { encoding: "utf8" })
 .then((html) => res.send(html));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});