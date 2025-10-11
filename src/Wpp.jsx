import { FaWhatsapp } from "react-icons/fa";

export default function BotaoWpp() {
  return (
    <div className="fixed bottom-4 right-4 cursor-pointer hover:scale-120 duration-150">
      <a 
        href="https://wa.me/5521970276413" 
        target="_blank" 
        rel="noopener noreferrer"
      >
          <FaWhatsapp className="text-[3.5em] text-white bg-[#25D366] rounded-4xl p-1.5" />
      </a>
    </div>
  )
}
