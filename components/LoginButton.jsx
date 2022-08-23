import { useMetamask } from "@thirdweb-dev/react";

const LoginButton = () => {

 // Function to connect to the user's Metamask wallet
 const connectWithMetamask = useMetamask();

  return (
      <button className="loginButton" onClick={connectWithMetamask}>Connect wallet</button>
  );
};

export default LoginButton;