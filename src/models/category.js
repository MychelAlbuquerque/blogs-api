const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "categories",
      underscored: true
    }
  );
  return CategoryTable;
}

module.exports = CategorySchema;