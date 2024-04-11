import { useContext, useState } from "react";
import { useWizard } from "react-use-wizard";
import { EmailContext } from "../../App";
import { z } from "zod";
import { motion } from "framer-motion";


const StepEmail = () => {

  const { previousStep, nextStep } = useWizard();

  const { setEmail } = useContext(EmailContext);
  const [error, setError] = useState("");


  const verification = () => {
    const mySchema = z
      .string()
      .email({ message: "Veuillez rentrer une adresse mail valide" })
      .min(5, { message: "Veuillez rentrer une adresse mail valide" });

    const nom = (document.getElementsByName("email")[0] as HTMLInputElement)
      .value;

    try {
      const validation = mySchema.parse(nom);
      setEmail(validation);
      nextStep();
    } catch (error: any) {
      setError(error["issues"][0]["message"]);
    }
  };

      onkeydown = (event) => {
        if (event.key === "Enter") {
          verification();
        }
      };

  return (
    <div className="flex flex-col min-h-screen fontFasterStroker">
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex flex-col justify-center p-4 gap-16 pl-20">
          {/* FORM */}
          <div className="flex flex-col gap-4 p-2">
            <p className="text-3xl my-10">Ton email</p>
            <input
              type="email"
              name="email"
              placeholder="email ..."
              autoFocus
              className="bg-green-50 p-2 rounded-xl w-[60%] mb-5 border-2 border-green-900"
            />
            {error && <p className="text-red-500">{error}</p>}

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
                onClick={verification}
              >
                Suivant
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

export default StepEmail;

