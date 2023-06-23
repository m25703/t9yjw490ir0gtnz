module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
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
  });

  return Posts;
};
