import Company from '../Model/companymodel.js'

export const getAllCompanies = async (req, res) => {
    try {
        const data = await Company.find()
        res.status(200).json({ companies: data })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getSingleCompany = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Company.findById(id)
        res.status(200).json({ company: data })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const postCompany = async (req, res) => {
    try {
        const data = await Company.create(req.body)
        res.status(201).json({ company: data })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

export const deleteCompany = async (req, res) => {
    const id = req.params.id
    try {
        Company.findByIdAndDelete(id, (err, data) => {
            if (data) {
                res.status(202).json({ message: 'Company deleted successfully'})
            } else {
                res.status(401).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

export const putCompany = async (req, res) => {
    const id = req.params.id
    try {
        Company.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, data) => {
            if (data) {
                res.status(200).json({ message: 'contact added successfully', company: data })
            } else {
                res.status(401).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}