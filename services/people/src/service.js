"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const pino = require("pino");
const expressPino = require("express-pino-logger");
const { StatusCodes } = require("http-status-codes");
const PORT = process.env.PORT || 9000;
const exposedPort = process.env.EXPOSED_PORT || PORT;
const log = pino({ level: process.env.LOG_LEVEL || "info" });

const expressLogger = expressPino({ logger: log });

const app = express();
app.use(expressLogger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET");

  if (req.method === "OPTIONS") return res.status(StatusCodes.OK).json({});

  next();
});

app.get("/people", async (req, res) => {
  res.send(
    JSON.stringify({
      people: [
        {
          id: 1,
          name: "person 1"
        },
        {
          id: 2,
          name: "person 2"
        },
        {
          id: 3,
          name: "person 3"
        },
        {
          id: 4,
          name: "person 4"
        },
        {
          id: 5,
          name: "person 5"
        },
        {
          id: 6,
          name: "person 6"
        },
        {
          id: 7,
          name: "person 7"
        },
        {
          id: 8,
          name: "person 8"
        },
        {
          id: 9,
          name: "person 9"
        },
        {
          id: 10,
          name: "person 10"
        }
      ]
    })
  );
});

app.listen(PORT, async () => {
  log.info(`People service started on port ${exposedPort}`);
});
