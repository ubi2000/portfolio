const express=require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes/portfolioRoute");
const path=require("path")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'./frontEnd/dist/')))

app.use("/email",router);

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"./frontEnd//dist/index.html"))
})
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Runnning On PORT ${PORT} `);
  });