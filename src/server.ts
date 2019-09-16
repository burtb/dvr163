// tslint:disable:no-console
import express from "express";
import path from "path";
import configController from "./controllers/configController";
import snapshotController from "./controllers/snapshotController";
import streamMjpegController from "./controllers/streamMjpegController";

const port = process.env.PORT || 5000;
const app = express();
const api = express.Router();

// Host static client code
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Log requests
api.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// Define routes
api.use("/config", configController);
api.use("/snapshot/:channelNumber", snapshotController);
api.use("/stream/mjpeg/:channelNumber", streamMjpegController);
app.use("/api", api);

// Listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
