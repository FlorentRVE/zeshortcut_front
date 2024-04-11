import ButtonHome from "../components/ButtonHome";
import { motion } from "framer-motion";


function HomePage() {
  return (
    <div className="flex flex-col min-h-screen fontFasterStroker bg-green-50">
      <header className="bg-[url('/images/header.png')] h-20"></header>

      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex flex-col justify-center p-4 gap-16 bg-green-50 pl-20">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <h1 className=" text-6xl text-red-600">ZeShortcut</h1>
              <svg
                className="text-red-600"
                width="50px"
                height="50px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="01" id="_01">
                  <path d="M28,16a1,1,0,0,1-1,1H22a1,1,0,0,1-.93-.63l-.91-2.28L17,25.27A1,1,0,0,1,16,26h-.06a1,1,0,0,1-.93-.83l-2.34-14-1.73,5.18A1,1,0,0,1,10,17H5a1,1,0,0,1,0-2H9.28l2.77-8.32a1,1,0,0,1,1-.68,1,1,0,0,1,.91.83l2.27,13.62L19,10.73a1,1,0,0,1,.91-.72,1,1,0,0,1,1,.63L22.68,15H27A1,1,0,0,1,28,16Z" />
                </g>
              </svg>
            </div>
            <p className="text-3xl my-8">Le raccourci vers la santé</p>
            <p className="text-2xl text-gray-600">
              Réponds aux questions et obtiens ton régime personalisé !
            </p>
          </div>

          <motion.a
            href="/question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ButtonHome text="C'est parti !" />
          </motion.a>
        </div>

        <div className=" bg-green-50 flex justify-end items-center">
          <motion.img
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="max-h-[80%]"
            src="/images/image_home.png"
          />
        </div>
      </div>

      <footer className="bg-[url('/images/footer.png')] h-20"></footer>
    </div>
  );
}

export default HomePage;
