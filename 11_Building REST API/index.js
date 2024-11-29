const express = require("express");
const users = require("./MOCK_DATA.json");
const fs= require ('fs');
const app = express();
const PORT = 4000;

//MIddleware - Plugin
app.use(express.urlencoded({ extended: false }));
// Routes/api
app.get("/users", (req, res) => {
    const html = `
    <ul>
         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});


//REST API
app.get("/api/users", (req, res) => {
    return res.json(users)
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        //Edit user with id
        return res.json({ status: "panding" });

    })
    .delete((req, res) => {
        //Delete user with id
        return res.json({ status: "panding" });
    });
/*
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});
*/

app.post("/api/users", (req, res) => {
    //TODO: create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err, data) =>{
        return res.json({ status: "success", id: users.length + 1 });
    })
});

/*
app.patch("/api/users/:id", (req, res) => {
    //TODO: Edit the user with id
    return res.json({ status: "panding" });
})

app.delete("/api/users/:id", (req, res) => {
    //TODO: Edit the user with id
    return res.json({ status: "panding" });
})
*/

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
