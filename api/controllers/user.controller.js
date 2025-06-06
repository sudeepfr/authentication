const express = require('express');

const test = (req, res) => {
  res.json({ message: "API done" });
};

module.exports = { test };