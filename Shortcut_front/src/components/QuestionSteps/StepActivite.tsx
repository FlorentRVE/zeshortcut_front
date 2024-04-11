import { useContext } from "react";
import { useWizard } from "react-use-wizard";
import { ActiviteContext } from "../../App";
import { motion } from "framer-motion";


const StepActivite = () => {
  const { handleStep, nextStep, previousStep } = useWizard();

  const { setActivite } = useContext(ActiviteContext);

  handleStep(() => {
    const activite = (document.getElementsByName("activite")[0] as HTMLInputElement).value;
    setActivite(activite);
  });

  onkeydown = (event) => {
    if (event.key === "Enter") {
      nextStep();
    }
  }

  return (
    <div className="flex flex-col min-h-screen fontFasterStroker">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex flex-col justify-center p-4 gap-16 pl-20">
          {/* FORM */}
          <div className="flex flex-col gap-4 p-2">
            <p className="text-3xl my-10">Es-tu plutôt</p>
            <select
              name="activite"
              className="bg-green-50 p-2 rounded-xl w-[60%] mb-5 border-2 border-green-900"
            >
              <option value="sedentaire">Sédentaire</option>
              <option value="legere">Activité physique légère</option>
              <option value="moderee">Activité physique modérée</option>
              <option value="intense">Activité physique intense</option>
            </select>
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
              <motion.button
                className="bg-green-800 py-3 px-4 w-[60%] text-slate-100 rounded-xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => nextStep()}
              >
                Suivant
              </motion.button>
            </div>{" "}
          </div>
        </div>

        <div className="flex justify-end items-center h-screen">
          <img className="h-full" src="/images/image_question.png" />
        </div>
      </div>
    </div>
  );
};

export default StepActivite;
