import { useContext } from "react";
import { EmailContext, NomContext, CalorieContext } from "../App";
import * as api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function ResultPage() {
  const { nom } = useContext(NomContext);
  const { email } = useContext(EmailContext);
  const { calorie } = useContext(CalorieContext);
  const navigate = useNavigate();

  const perdrePoids = () => {

    api.getMeals({
      nom: nom,
      email: email,
      calorie: calorie - 300,
    });

    navigate("/ending");
  };

  const gagnerMasse = () => {

    api.getMeals({
      nom: nom,
      email: email,
      calorie: calorie + 300,
    });

    navigate("/ending");
  };

  return (
    <div className="fontFasterStroker bg-slate-50 flex justify-between">
      {/* IMAGE */}
      <div className="bg-green-50 flex items-end h-screen">
        <img className="h-[90%]" src="/images/image_result.png" />
      </div>

      <div className=" flex flex-col justify-center p-4 gap-16 bg-slate-50 pr-20">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 bg-green-300 items-center h-[90vh] rounded-xl py-10 px-6"
        >
          <p className="text-3xl mb-8 w-[60%] text-center">
            Tu as actuellement un besoin calorique de
          </p>
          <p className=" text-6xl text-red-600">{calorie} Cal</p>
          <p className="text-xl mt-8">Choisis ton objectif</p>
          <p className="text-lg text-gray-500 w-[70%] text-center">
            Tu vas recevoir ton régime totalement personalisé par mail !
          </p>

          <div className="h-1 w-1/2 bg-green-600 my-6"></div>

          {/* ======= BOUTON */}
          <div className="flex flex-col gap-10 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex justify-between gap-2 items-center hover:cursor-pointer"
              onClick={perdrePoids}
            >
              <img className="w-11" src="/images/icon1.png" />
              <p className="text-3xl">Perdre du poids</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex  justify-between gap-2 items-center hover:cursor-pointer"
              onClick={gagnerMasse}
            >
              <img className="w-11" src="/images/icon2.png" />
              <p className="text-3xl">Gagner en masse</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResultPage;
