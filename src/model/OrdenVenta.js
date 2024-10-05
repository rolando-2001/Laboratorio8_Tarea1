import { Sequelize } from 'sequelize';
import { db } from '../database/database.js';

export const OrdenVenta = db.define('OrdenVenta', {
  NroOrdenVta: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaEmision: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Motivo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Situacion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'OrdenVenta', 
  timestamps: false, 
});

