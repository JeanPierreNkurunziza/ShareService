const competenceModel = (sequelize, DataTypes) => {
    const Competence = sequelize.define("Competence", {
        competence: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
        timestamps: false
    })

    return Competence
}
module.exports = competenceModel 