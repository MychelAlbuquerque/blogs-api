const BlogPostSchema = (sequelize, DataTypes) =>{
  const BlogPostTable = sequelize.define("BlogPost",
    {
      id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: DataTypes.INTERGER,
      title: DataTypes.STRING,
      content:DataTypes.STRING,
      published:DataTypes.DATE,
      updated:DataTypes.DATE,
    },
    {
      timestamps: true,
      tableName: "blog_posts",
      underscored: true
    }
  );

    BlogPostTable.associate = ({User}) =>{
      BlogPostTable.belongsTo(User, {
        as: 'user',
        foreignKey: 'user_id',
      });
    }

  return BlogPostTable;
}

module.exports = BlogPostSchema;