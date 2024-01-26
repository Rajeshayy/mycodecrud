import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import db from './config/Database.js'
import UserRoute from "./routes/UserRoute.js"
import ProductRoute from "./routes/ProductRoute.js"
import sequelizeStore from "connect-session-sequelize"
import AuthRoute from "./routes/AuthRoute.js"

dotenv.config();
const app = express();

const sessionStore = sequelizeStore(session.Store)

const store = new sessionStore({
    db:db
})
// const initializeDatabase = async () => {
//     await db.sync();
// };

// initializeDatabase();

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));
app.use(express.json())
app.use(UserRoute)
app.use(ProductRoute)
app.use(AuthRoute)

//store.sync()

app.listen(process.env.APP_PORT,()=>{
    console.log(`Server up and running...`)
})