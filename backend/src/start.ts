import "./env";
import app from "./Server";

const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})