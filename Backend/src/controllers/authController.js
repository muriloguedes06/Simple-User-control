import * as authService from "../services/authService.js";

export const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        return res.json(data);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { user, email, password } = req.body;
        if (!email || !password) { return res.status(400).json({ error: "Email e senha são obrigatórios" }); }
        if (!user) { return res.status(400).json({ error: "Nome é obrigatório" }); }
        
        const newUser = await authService.create(req.body);
        return res.status(201).json("Usuário criado!");
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};