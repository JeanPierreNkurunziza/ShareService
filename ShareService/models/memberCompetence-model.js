const memberCompetenceModel = (sequelize, DataTypes) => {
    const MemberCompetence = sequelize.define("MemberCompetence", {
<<<<<<< HEAD
<<<<<<< HEAD
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey:true,
        //     autoIncrement:true,
        //     allowNull: false
        // },
=======
=======
>>>>>>> 36639e1 (init)
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
        jour: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        heureDebut: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        heureFin: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        niveauCompetence: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    },
    {
        timestamps: false
    })

    return MemberCompetence
}
module.exports = memberCompetenceModel 