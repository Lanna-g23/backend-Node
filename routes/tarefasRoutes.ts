import { Router } from "express";

const router = Router();

router.get("/", ()=> console.log('pega todas as tarefas'))
router.get("/:id", ()=> console.log('pega uma tarefa'))
router.post("/", ()=> console.log('cadastra uma tarefa'))
router.put("/:id", ()=> console.log('atualizar uma tarefa'))
router.delete("/:id", ()=> console.log('deletar uma tarefa'))

export default router;
