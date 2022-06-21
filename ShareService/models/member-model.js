const memberModel = (sequelize, DataTypes) => {
    const Member = sequelize.define("Member", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone : {
            type: DataTypes.STRING(100),
            allowNull: false,
           
        },
        rue : {
            type: DataTypes.STRING(100),
            allowNull: false,
            
        },
        numero : {
            type: DataTypes.STRING(100),
            allowNull: false,
            
        },
<<<<<<< HEAD
=======
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
>>>>>>> 36639e1 (init)
    },
    {
        timestamps: false
    })

    return Member
}
module.exports = memberModel 