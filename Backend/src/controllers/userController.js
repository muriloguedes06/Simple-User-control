import * as userService from "../services/userService.js";

export const editUser = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) { return res.status(400).json({ error: "Email é obrigatório" }); }
        const editedUser = await userService.edit(req.body);
        return res.status(200).json(editedUser);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleter(req.body);
        return res.status(200).json("Usuário deletado!");
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await userService.find(req.body);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}