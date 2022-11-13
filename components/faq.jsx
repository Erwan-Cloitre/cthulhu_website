const Faq = () => {

  return (
    <div className="wrapper">
      <ul id="accordion">
          <li>
              <label htmlFor="first">What is Eternal Cthulhu Cultist Club ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="first"></input>
              <div className="answer">
                <p>We are one group of cultist who worships Cthulhu and Ethereum. 
                  Our goal is to share our knowledge of the blockchain and the great old ones. 
                  We are investigator, artist, developer, writer and dreamer all around the world who go straight on throw the unknown.
                </p>
              </div>
          </li>
          <li>
              <label htmlFor="second">How to join the cult ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="second"></input>
              <div className="answer">
                <p>Get one eternal cthulhu NFT 
                  To do it, get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Binance, Coinbase, Kraken... 
                  Then, click the button "MINT"  to connect your wallet and approve the transaction on Metamask. 
                  To conclude, believe in ETH and the great old ones
                </p>
              </div>
          </li>
          <li>
              <label htmlFor="third">What happens when I enter the cult ?<span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="third"></input>
              <div className="answer">
                <p>- Access to cultist community 
                  - receiving token from our lord and savior cthulhu
                  - Receiving air drop and relics
                  - invitation for secret event
                  - more secret incoming
                  - Have faith in ethereum and Cthulhu
                </p>
              </div>
          </li>
      </ul>
    </div>
  );
};

export default Faq;