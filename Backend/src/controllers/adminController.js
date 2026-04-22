import * as adminService from "../services/adminService.js";

export const getUser = async (req, res) => {
    try {
        const users = await adminService.find(req.user);

        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updated = await adminService.update(req.user, id, data);

        return res.status(200).json(updated);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await adminService.remove(req.user, id);

        return res.status(200).json(deleted);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};