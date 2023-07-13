import express from "express";

const app = express();

app.use(express.json());

app.use((req, res) => {
  res.send("ahihi");
});

export const viteNodeApp = app;
