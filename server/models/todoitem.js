module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TodoItem.associate = (models) => {
    //belongs to todo
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      //if todo is deleted, associated todoItem shuold be deleted too
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};