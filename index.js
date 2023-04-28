import  Express  from "express";  
import morgan from "morgan";
import {PORT} from "./config"

import paymentRoutes from "./routes/payment.routes"
const app = Express();

app.use(morgan("dev"))
app.use(paymentRoutes);


app.listen(PORT);
console.log("server listening on port", PORT);
