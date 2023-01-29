const PostCategorySchema = (sequelize, DataTypes) =>{
  const PostCategoryTable = sequelize.define("PostCategory",
    {},
    {
      timestamps: false,
      tableName: "post_category",
      underscored: true
    });

  PostCategoryTable.associate = ({Category, BlogPost}) =>{
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      
      foreignKey:'post_id',
      otherKey:'category_id',
      through: PostCategoryTable
    })

    Category.belongsToMany(BlogPost, {
      as: 'posts',
      foreignKey:'category_id',
      otherKey:'post_id',
      through: PostCategoryTable
    })
  }
  return PostCategoryTable;
}

module.exports = PostCategorySchema;