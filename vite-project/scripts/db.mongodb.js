use("login")

db.createCollection("users")

db.users.insertOne(
    {
        username: "admin",
        password: "mjcm2027"
    }
)