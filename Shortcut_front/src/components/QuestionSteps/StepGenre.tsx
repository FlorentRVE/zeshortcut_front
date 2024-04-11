import { useContext } from "react";
import { useWizard } from "react-use-wizard";
import { GenreContext } from "../../App";
import {motion} from "framer-motion";

const StepGenre = () => {
  const { nextStep, previousStep } = useWizard();

  const { setGenre } = useContext(GenreContext);

  const nextHomme = () => {
    setGenre(true)
    nextStep();
  }

  const nextFemme = () => {
    setGenre(false)
    nextStep();
  }

  return (
    <div className="flex flex-col min-h-screen fontFasterStroker">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex flex-col justify-center p-4 gap-16 pl-20">
          {/* FORM */}
          <div className="flex flex-col gap-4 p-2 mb-4">
            <p className="text-3xl my-10">Choisis ton sexe:</p>
            <div className="flex gap-2 text-2xl">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex-1 brightness-50 hover:brightness-100 flex flex-col cursor-pointer items-center justify-center bg-yellow-200 rounded-xl p-2 w-[40%]"
                onClick={nextHomme}
              >
                <img src="/images/man.png" className="h-[60%] mb-3" />
                <p>Homme</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex-1 brightness-50 hover:brightness-100 flex flex-col cursor-pointer items-center justify-center bg-green-200 rounded-xl p-2 w-[40%]"
                onClick={nextFemme}
              >
                <img src="/images/woman.png" className="h-[60%] mb-3" />
                <p>Femme</p>
              </motion.div>
            </div>

            {/* BUTTON */}
            <div className="flex gap-4 w-[60%]">
              <motion.button
                className="bg-green-800 py-3 px-4 w-[60%] text-slate-100 rounded-xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => previousStep()}
              >
                Précédent
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center h-screen">
          <img className="h-full" src="/images/image_question.png" />
        </div>
      </div>
    </div>
  );
};

export default StepGenre;
