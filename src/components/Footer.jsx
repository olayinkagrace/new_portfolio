import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
   <section className="px-20 text-center">
     <div className="flex flex-wrap justify-between py-3">
      <a href="https://github.com/olayinkagrace" className="py-2">
        <FaGithub color="balck" />
      </a>
      <a href="https://www.linkedin.com/in/olayinka-grace-7031b3200" className="py-2">
        <FaLinkedinIn color="sky" />
      </a>
      <a href="https://twitter.com/BunmeeTreats?t=1SJPkguLEgC40lpAYzywMQ&s=09" className="py-2">
        <FaTwitter color="blue" />
      </a>
    </div>
    <div className='py-3 text-[8px] text-neutral-500'>
        &#169; All right reserved-Olayinka Grace Okanlawon
      </div>
   </section>
  )
}

export default Footer
