/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teachers', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'teachers',
		timestamps: false,
		underscored: true
	});
};
