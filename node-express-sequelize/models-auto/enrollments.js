/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('enrollments', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		course_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'courses',
				key: 'id'
			}
		},
		student_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'students',
				key: 'id'
			}
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
		tableName: 'enrollments',
		timestamps: false,
		underscored: true
	});
};
