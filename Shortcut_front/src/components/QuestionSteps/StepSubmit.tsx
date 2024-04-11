import { useContext } from "react";
import { useWizard } from "react-use-wizard";
import * as calcul from "../../utils/calcul";
import {
  EmailContext,
  NomContext,
  AgeContext,
  GenreContext,
  ActiviteContext,
  TailleContext,
  PoidsContext,
  CalorieContext,
} from "../../App";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const StepSubmit = () => {
  const { previousStep } = useWizard();

  const { nom } = useContext(NomContext);
  const { age } = useContext(AgeContext);
  const { genre } = useContext(GenreContext);
  const { activite } = useContext(ActiviteContext);
  const { taille } = useContext(TailleContext);
  const { poids } = useContext(PoidsContext);
  const { email } = useContext(EmailContext);
  const { setCalorie } = useContext(CalorieContext);
  const navigate = useNavigate();

  const submit = () => {
    if (genre === true) {
      const calorie = calcul.calculHome(poids, taille, age, activite);
      const calorieNumber = Number(calorie);
      setCalorie(calorieNumber);
    } else {
      const calorie = calcul.calculFemme(poids, taille, age, activite);
      const calorieNumber = Number(calorie);
      setCalorie(calorieNumber);
    }
    navigate("/result");
  };

  return (
    <div className="flex min-h-screen fontFasterStroker">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex flex-col justify-center p-4 gap-16 pl-20">
          {/* FORM */}
          <div className="flex flex-col gap-4 p-2 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, translateY: -100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col text-red-500 gap-2 justify-center items-center bg-green-300 px-6 py-10 rounded-xl text-xl mb-10"
            >
              <p className="text-3xl text-red-600 mb-5 underline">
                Récapitulatif
              </p>
              {genre == true ? (
                <p className="bg-blue-500 text-white px-3 py-2 rounded-xl">
                  Tu es un Homme
                </p>
              ) : (
                <p className="bg-pink-400 text-white px-3 py-2 rounded-xl">
                  Tu es une Femme
                </p>
              )}
              <p>
                Nom: <span className="font-bold text-black">{nom}</span>
              </p>
              <p>
                Âge: <span className="font-bold text-black">{age} ans</span>
              </p>
              <p>
                Ton activité:{" "}
                <span className="font-bold text-black">{activite}</span>
              </p>
              <p>
                Ta taille:{" "}
                <span className="font-bold text-black">{taille}cm</span>
              </p>
              <p>
                Ton poids:{" "}
                <span className="font-bold text-black">{poids}Kg</span>
              </p>
              <p>
                Email: <span className="font-bold text-black">{email}</span>
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              className="bg-green-800 py-3 px-4 w-[60%] text-slate-100 rounded-xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => previousStep()}
            >
              Précédent
            </motion.button>
            <motion.button
              className="bg-green-800 py-3 px-4 w-[60%] text-slate-100 rounded-xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={submit}
            >
              Obtenir mes résultats
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center h-screen">
        <img className="h-full" src="/images/image_question.png" />
      </div>
    </div>
  );
};

export default StepSubmit;
