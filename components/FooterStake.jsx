import Image from 'next/image'
const FooterStake = () => {
  return (
    <div className="FooterStakeWrap">
      <Image
    alt="Footer"
    src="/footer.png"
    layout="fill"
    objectFit="cover"
    quality={80}
  /></div>
    
  );
};

export default FooterStake;