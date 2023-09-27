import React from 'react'
import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri';


const WhatsAppButton = () => {
    
    return (
      <Link 
        href='https://wa.me/5585981137575?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta'
        target='blank'
        className="fixed cursor-pointer w-16 h-16 bottom-6 right-10 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl shadow-md hover:scale-105"
      >
        <RiWhatsappFill />
      </Link>
    );
  };
  
  export default WhatsAppButton;
  