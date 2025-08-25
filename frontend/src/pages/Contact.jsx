import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative flex flex-col min-h-screen 
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      overflow-hidden transition-colors duration-500">

      <div className="absolute top-20 left-12 w-72 h-72 
        bg-white/20 dark:bg-purple-600/20 
        rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="absolute bottom-20 right-12 w-80 h-80 
        bg-white/20 dark:bg-indigo-600/20 
        rounded-full blur-3xl opacity-40 animate-bounce"></div>

      
      <div className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="backdrop-blur-2xl bg-white/10 dark:bg-gray-900/30 
          shadow-2xl border border-white/20 dark:border-gray-700/50 
          rounded-3xl p-10 md:p-14 max-w-2xl w-full text-center 
          transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">


          <h1 className="text-3xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 
            text-transparent bg-clip-text drop-shadow-lg mb-12">
            Let’s Connect ✨
          </h1>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center justify-center gap-4 group">
              <FaEnvelope className="text-yellow-300 text-3xl transition duration-300 group-hover:scale-125 group-hover:text-yellow-400" />
              <p className="text-white text-lg md:text-xl drop-shadow-sm">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:snearaparvin.cse@gmail.com"
                  className="text-yellow-200 hover:underline"
                >
                  snearaparvin.cse@gmail.com
                </a>
              </p>
            </div>

     
            <div className="flex items-center justify-center gap-4 group">
              <FaPhone className="text-green-300 text-3xl transition duration-300 group-hover:scale-125 group-hover:text-green-400" />
              <p className="text-white text-lg md:text-xl drop-shadow-sm">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:01832346270"
                  className="text-green-200 hover:underline"
                >
                  01832346270
                </a>
              </p>
            </div>

            
            <div className="flex items-center justify-center gap-4 group">
              <FaMapMarkerAlt className="text-red-300 text-3xl transition duration-300 group-hover:scale-125 group-hover:text-red-400" />
              <p className="text-white text-lg md:text-xl drop-shadow-sm">
                <span className="font-semibold">Location:</span> Dhaka, Mirpur-10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
