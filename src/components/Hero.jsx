import { styles } from "../styles";
import pic from '../assets/tech/olayinka.jpg'


const Hero = () => {
  return (
    <section>
      <div
        className={` ${styles.paddingX} flex flex-row items-start  pt-24`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi,  I  am <span className='text-[#915EFF]'>Olayinka Grace</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full stack developer <br className='sm:block hidden' />
            I build responsive web and mobile applications
          </p>
        </div>
      </div>
      <div className='items-center justify-center flex pt-10'>
        <img src={pic} alt="pic" className="w-48 h-48 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
