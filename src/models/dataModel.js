import db from '../utils/db.js';

export const selectData = async () => {
  const [rows] = await db.query('SELECT * FROM Data');
  return rows;
};

export const selectDataById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Data WHERE id = ?', [id]);
  return rows[0];
};

export const insertData = async (name, content, Category_id) => {
  const [result] = await db.query(
    'INSERT INTO Data (name, content, Category_id) VALUES (?, ?, ?)',
    [name, content, Category_id],
  );
  return result.insertId;
};

export const updateDataById = async (id, name, content, Category_id) => {
  const fields = [];
  const values = [];

  if (name) {
    fields.push('name = ?');
    values.push(name);
  }
  if (content) {
    fields.push('content = ?');
    values.push(content);
  }
  if (Category_id) {
    fields.push('Category_id = ?');
    values.push(Category_id);
  }

  values.push(id);

  const query = `UPDATE Data SET ${fields.join(', ')} WHERE id = ?`;

  await db.query(query, values);

  const updatedData = await selectDataById(id);

  return updatedData;
};

export const deleteDataById = async (id) => {
  const [result] = await db.query('DELETE FROM Data WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
