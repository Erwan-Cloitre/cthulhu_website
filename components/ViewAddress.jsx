import { useAddress } from "@thirdweb-dev/react";

const ViewAddress = () => {
  // Function to connect to the user's Metamask wallet
  const address = useAddress();

  return (
    <p className="">{address}</p>
  );
};

export default ViewAddress;