import Image from 'next/image'
const FooterMint = () => {
  return (
      <div className="FooterStakeWrap"><Image
    alt="Footer"
    src='/footer.png'
    layout="responsive"
    width={3839}
    height={1378}
    quality={100}
  /></div>
  );
};

export default FooterMint;