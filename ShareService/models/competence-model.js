const competenceModel = (sequelize, DataTypes) => {
    const Competence = sequelize.define("Competence", {
        competence: {
            type: DataTypes.STRING(20),
            allowNull: false
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 36639e1 (init)
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
        }
    },
    {
        timestamps: false
    })

    return Competence
}
module.exports = competenceModel 