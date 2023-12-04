const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '34.101.68.4', // Replace with your actual host IP address
    port: 3306, // Replace with your actual MySQL port
    username: 'root',
    password: '321cashflow', // Replace with your database password
    database: 'pengelola_kauangan',
  });

const Transaksi = sequelize.define('Transaksi', {
    id_transaksi: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    id_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_kategori: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_jenis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_aset: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    note: {
        type: DataTypes.STRING,
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
    tableName: 'transaksi',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Transaksi;
