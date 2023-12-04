const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '34.101.68.4', // Replace with your actual host IP address
    port: 3306, // Replace with your actual MySQL port
    username: 'root',
    password: '321cashflow', // Replace with your database password
    database: 'pengelola_kauangan',
  });

const JenisTransaksi = sequelize.define('JenisTransaksi', {
    id_jenis: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'jenis_transaksi',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = JenisTransaksi;
