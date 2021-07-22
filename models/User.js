const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8,16],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

User.addHook(`beforeSave`, user => {
  const rounds = 10;
  user.password = bcrypt.hashSync(
    user.password,
    bcrypt.genSaltSync(rounds),
    null
  );
});

module.exports = User;
