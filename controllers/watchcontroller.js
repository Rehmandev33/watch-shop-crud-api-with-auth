import Watch from '../model/watch.js';

//GET ALL (Paginated)
const getWatches = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const watches = await Watch.find({}).skip(skip).limit(limit);
        const total = await Watch.countDocuments({});

        res.status(200).json({ page, limit, total, data: watches });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ONE
const getWatchById = async (req, res) => {
    try {
        const watch = await Watch.findById(req.params.id);
        if (!watch) return res.status(404).json({ message: 'Watch not found' });
        res.status(200).json(watch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE
const createWatch = async (req, res) => {
    try {
        const newWatch = await Watch.create(req.body);
        res.status(201).json(newWatch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//  UPDATE
const updateWatch = async (req, res) => {
    try {
        const updatedWatch = await Watch.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Returns the updated object
        );
        if (!updatedWatch) return res.status(404).json({ message: 'Watch not found' });
        res.status(200).json(updatedWatch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
const deleteWatch = async (req, res) => {
    try {
        const deletedWatch = await Watch.findByIdAndDelete(req.params.id);
        if (!deletedWatch) return res.status(404).json({ message: 'Watch not found' });
        res.status(200).json({ message: 'Watch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getWatches, getWatchById, createWatch, updateWatch, deleteWatch };