import Image from 'next/image'
const FooterMint = () => {
  return (
    <div className="FooterStakeWrap">
      <Image
        alt="Footer"
        src="/footer.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default FooterMint;