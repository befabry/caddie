import { DataType } from 'sequelize-typescript';
import { Migration } from '../umzug-cli';

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable('Items', {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    price: {
      type: DataType.FLOAT,
      allowNull: true,
    },
    type: {
      type: DataType.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataType.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataType.DATE,
      allowNull: false,
    },
  });
};
export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable('Items');
};
