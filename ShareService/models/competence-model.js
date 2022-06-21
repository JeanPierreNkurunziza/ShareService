const competenceModel = (sequelize, DataTypes) => {
    const Competence = sequelize.define("Competence", {
        competence: {
            type: DataTypes.STRING(20),
            allowNull: false
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

    return Competence
}
module.exports = competenceModel 