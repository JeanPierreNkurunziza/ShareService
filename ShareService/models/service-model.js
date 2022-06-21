const serviceModel = (sequelize, DataTypes) => {
    const Service = sequelize.define("Service", {
        service: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        image: {
<<<<<<< HEAD
<<<<<<< HEAD
            type: DataTypes.STRING,
=======
            type: DataTypes.TEXT('long'),
>>>>>>> 36639e1 (init)
=======
            type: DataTypes.TEXT('long'),
>>>>>>> 36639e1 (init)
            allowNull: true
        }
    },
    {
        timestamps: false
    })

    return Service
}
module.exports = serviceModel 