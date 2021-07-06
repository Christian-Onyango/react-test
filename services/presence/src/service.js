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

app.get("/presence", async (req, res) => {
  res.send(
    JSON.stringify({
      people: [
        {
          id: 11,
          personId: 1,
          presence: {
            status: "available",
            reason: "available"
          }

        },
        {
          id: 12,
          personId: 2,
          presence: {
            status: "offline",
            reason: "offline"
          }
        },
        {
          id: 13,
          personId: 3,
          presence: {
            status: "available",
            reason: "available"
          }
        },
        {
          id: 14,
          personId: 4,
          presence: {
            status: "away",
            reason: "away"
          }
        },
        {
          id: 15,
          personId: 5,
          presence: {
            status: "available",
            reason: "available"
          }
        },
        {
          id: 16,
          personId: 6,
          presence: {
            status: "offline",
            reason: "offline"
          }
        },
        {
          id: 17,
          personId: 7,
          presence: {
            status: "away",
            reason: "away"
          }
        },
        {
          id: 18,
          personId: 8,
          presence: {
            status: "offline",
            reason: "out of office"
          }
        },
        {
          id: 19,
          personId: 9,
          presence: {
            status: "busy",
            reason: "meeting"
          }
        },
        {
          id: 110,
          personId: 10,
          presence: {
            status: "busy",
            reason: "leave me alone"
          }
        }
      ]
    })
  );
});

app.listen(PORT, async () => {
  log.info(`Presence service started on port ${exposedPort}`);
});
