import handleError from '../utils/handleError.js';
import {
  selectData,
  selectDataById,
  insertData,
  updateDataById,
  deleteDataById,
} from '../models/DataModel.js';

export const getAllData = async (req, res) => {
  try {
    const data = await selectData();
    return res.status(200).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await selectDataById(id);

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const createData = async (req, res) => {
  try {
    const { name, content, Category_id } = req.body;

    if (!name || !content || !Category_id) {
      return res.status(400).json({ message: 'Required data missing' });
    }

    const dataId = await insertData(name, content, Category_id);

    return res
      .status(200)
      .json({ message: 'Data created successfully', dataId: dataId });
  } catch (error) {
    handleError(res, error);
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, Category_id } = req.body;

    if (!name && !content && !Category_id) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    const updatedData = await updateDataById(id, name, content, Category_id);

    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res
      .status(200)
      .json({ message: 'Data updated successfully', updatedData: updatedData });
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await deleteDataById(id);

    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};
