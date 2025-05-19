// const express = require("express");
import express from "express";

const backend = express();
const port = 3000;

backend.get("/", (req, res) => {
  res.send("This is shayan");
});

backend.listen(port, () => {
  console.log(`This Server is running on http://localhost:${port}`);
});
