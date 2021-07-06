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

app.get("/messages", async (req, res) => {
  res.send(
    JSON.stringify({
      conversations: [
        {
          id: 21,
          people: [1, 2],
          messages: [
            {
              body: "A: from 1 to 2",
              from: 1,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "B: from 2 to 1",
              from: 2,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "C: from 2 to 1",
              from: 2,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "D: from 1 to 2",
              from: 1,
              time: "2021.6.1T14:00:00"
            }
          ]
        },
        {
          id: 22,
          people: [3, 4],
          messages: [
            {
              body: "E: from 3 to 4",
              from: 3,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "F: from 4 to 3",
              from: 4,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "G: from 4 to 3",
              from: 4,
              time: "2021.6.1T14:00:00"
            },
            {
              body: "H: from 3 to 4",
              from: 3,
              time: "2021.6.1T14:00:00"
            }
          ]
        }
      ]
    })
  );
});

app.listen(PORT, async () => {
  log.info(`Messages service started on port ${exposedPort}`);
});
