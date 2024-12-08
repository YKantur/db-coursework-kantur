import db from '../utils/db.js';

export const selectComments = async () => {
  const [rows] = await db.query('SELECT * FROM Comment');
  return rows;
};

export const selectCommentById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Comment WHERE id = ?', [id]);
  return rows[0];
};

export const insertComment = async (content, User_id, Data_id) => {
  const [result] = await db.query(
    'INSERT INTO Comment (content, User_id, Data_id) VALUES (?, ?, ?)',
    [content, User_id, Data_id],
  );
  return result.insertId;
};

export const deleteCommentById = async (id) => {
  const [result] = await db.query('DELETE FROM Comment WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
