import { Income } from "../model/Income.js";


export const createIncome = async (req, res) => {
    try {
        const { source, amount } = req.body;
        const income = await Income.create({
            userId: req.user._id, source, amount
        })

        return res.status(200).json({ message: "Income created", income })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ message: error.message });
    }
}


export const updateIncome = async (req, res) => {
    try {

        const income = await Income.findById(req.params.id);
        const { source, amount } = req.body;

        if (!income) {
            return res.status(404).json({ message: "No income data found" })
        }

        if (source) {
            income.source = source;
        }
        if (amount) {
            income.amount = amount;
        }
        await income.save();
        return res.status(200).json({ message: " Income data updated", income });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



export const getAllIncome = async (req, res) => {
    try {
        const userId = req.user._id;
        // console.log(userId);

        if (!userId) {
            return res.status(400).json({ error: "User ID is missing in the request." });
        }
        const incomeAll = await Income.find({ userId });

        // const Advertisement = incomeAll.filter((i) => i.source === "Advertisement" && i.source)
        // const Freelance = incomeAll.filter((i) => i.source )
        // const Business = incomeAll.filter((i) => i.source === "Business")
        // const stockMarket = incomeAll.filter((i) => i.source === "stockMarket")
        // console.log(incomeAll)
        // console.log(Advertisement[])

        // const Advertisement = incomeAll
        //     .filter((i) => i.source === "Advertisement")
        //     .map((i) => i.source);

        // console.log(Advertisement);

        let totalIncome = 0;

        incomeAll.forEach((i) => {
            totalIncome += i.amount;
        })
        return res.status(200).json({
            totalIncome,
            incomeAll,
            // Advertisement,
            // Freelance,
            // Business,
            // stockMarket
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getMyIncome = async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        return res.status(200).json({ income });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Income data deleted" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}