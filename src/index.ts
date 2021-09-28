import  Express  from "express";

const app = Express()

app.get('/', (req: Express.Request, res: Express.Response) => (

     res.json({name: "Jaime"})
     
))

app.listen(3000, () => console.log("Server funcionando"))
//Change