const express = require("express")
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.toLowerCase().includes("bearer ")
    ) {
        res.status(403).send({error: "Not authenticated"})
    }
    next()
})

app.post("/v1/cities_you_can_fly_to", (req, res) => {
    if (!req.body.filterByCountry) {
        res.status(400).send({message: "No filters supplied"})
    }
    if (req.body.filterByCountry === "England") {
        res.send({
            London: true,
            Birmingham: true,
            Edinburgh: false,
        })
    } else {
        res.send({
            "New York": true,
            "Los Angeles": true,
            Chicago: false,
        })
    }
})

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
})
