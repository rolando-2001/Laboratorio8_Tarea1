import { Sequelize } from 'sequelize';
import { db } from '../database/database.js'; 
import { OrdenVenta } from './OrdenVenta.js'; 

export const DetalleOrdenVta = db.define('DetalleOrdenVta', {
    NroOrdenVta: {
      type: Sequelize.INTEGER,
      references: {
        model: OrdenVenta,
        key: 'NroOrdenVta',
      },
      allowNull: false,
      primaryKey: true,  
    },
    CodMedicamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,  
    },
    descripcionMed: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cantidadRequerida: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'DetalleOrdenVta',
    timestamps: false,  
    freezeTableName: true,  
  });
  

OrdenVenta.hasMany(DetalleOrdenVta, { foreignKey: 'NroOrdenVta', as: 'detalles' });
DetalleOrdenVta.belongsTo(OrdenVenta, { foreignKey: 'NroOrdenVta', as: 'ordenVenta' }); 
