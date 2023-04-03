import { Router } from "express";

const router = Router ();

router.get ("/", (req,res) => {
    res.render("chat", {})
})

export default router; //exporta todo el archivo de router