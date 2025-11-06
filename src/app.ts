import express from "express";
import { Request, Response, NextFunction } from "express";
import router from "../routes/tarefasRoutes";
 
const app = express();
app.use(express.json())

app.use("/tarefas", router);

/*app.get("/parametro/:nome", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.params.nome;
  console.log("Rota de parametro - Cliente digitou:", nome);
  res.send(`Você digitou o nome: ${nome}`);
});


app.get("/corpo", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.body.nome;
  console.log("Cliente digitou:", nome);
  res.send(`Você digitou o nome: ${nome}`);
});


app.get("/query", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.query.nome
  console.log("Variavel dentro do copo - Cliente digitou:", nome)
  res.send(`Variavel dentro do copo - Cliente digitou: ${nome}`)
})

app.get("/exemplo", (req:Request, res:Response, next:NextFunction)=>{
  console.log('aconteceu algo!!!!!')
  res.send("rodou tudo certo!!")
 
})*/






export default app;
