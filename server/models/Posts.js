module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastClick: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    lastIncrement: {
      type: DataTypes.FLOAT,
      defaultValue: 1,
    },
  });
  return Posts;
};
