const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User",
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
      underscored: true
    }
  );

  UserTable.associate = ({BlogPost}) =>{
    UserTable.hasmany(BlogPost, {
      as: 'blogPost',
      foreignKey: 'userId',
    });
  }
  return UserTable;
}

module.exports = UserSchema;