/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('courses', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		room: {
			type: DataTypes.STRING,
			allowNull: false
		},
		course_time: {
			type: DataTypes.STRING,
			allowNull: false
		},
		teacher_id: {
			type: DataTypes.INTEGER,
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
		tableName: 'courses',
		timestamps: false,
		underscored: true
	});
};
