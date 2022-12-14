const Faq = () => {

  return (
    <div className="wrapper">
      <ul id="accordion">
          <li>
              <label htmlFor="first">What is Eternal Cthulhu Cultist Club ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="first"></input>
              <div className="answer">
                <p>We are a group of cultist who worships Cthulhu and Ethereum. <br></br>
Our goal is to share our knowledge of the Blockchain and the Great Old Ones. <br></br>
We are investigator, artist, developer, writer and dreamer all around the world who go straight on through the unknown.
                </p>
              </div>
          </li>
          <li>
              <label htmlFor="second">How to join the cult ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="second"></input>
              <div className="answer">
                <p>Get one eternal cthulhu NFT<br></br>
To do it, get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Binance, Coinbase...  (don&apos;t use FTX) <br></br>
Then, click the button MINT  to connect your wallet and approve the transaction on Metamask. <br></br>
To conclude, believe in ETH and the great old ones
                </p>
              </div>
          </li>
          <li>
              <label htmlFor="third">What happens when I enter the cult ?<span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="third"></input>
              <div className="answer">
                <p>- Access to cultist community <br></br>
- Collecting token from our lord and savior cthulhu<br></br>
- Receiving air drop and relics<br></br>
- Invitation for secret event<br></br>
- More secret incoming<br></br>
- Have faith in Ethereum and Cthulhu<br></br>
                </p>
              </div>
          </li>
      </ul>
    </div>
  );
};

export default Faq;