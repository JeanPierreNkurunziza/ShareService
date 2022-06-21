const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6
            }
<<<<<<< HEAD
=======
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
>>>>>>> 36639e1 (init)
        }
    },
    {
        timestamps: false
    })

    return User
}
module.exports = userModel 