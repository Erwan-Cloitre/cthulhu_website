import Image from 'next/image'
const Footer = () => {
  return (
    <div className="footerHomeContainer"><Image
    alt="Footer"
    src='/footer.png'
    layout="responsive"
    width={1440}
    height={870}
    quality={100}
  /></div>
    
  );
};

export default Footer;