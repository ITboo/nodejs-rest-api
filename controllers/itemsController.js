import { itemModel } from "../models/itemsModel.js";

export const getItems = async (req, res) => {
    try {
        const items = itemModel.getAllItems()
        res.setHeader('Content-type', 'application/json')
        res.end(JSON.stringify(items))
    } catch (err) {
        res.statusCode = 500
        res.end(`Error: ${res.err.message}`)
    }
}