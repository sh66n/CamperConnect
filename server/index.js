const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
