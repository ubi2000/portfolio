const express=require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes/portfolioRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



app.use("/email",router);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Runnning On PORT ${PORT} `);
  });