const Faq = () => {

  return (
    <div className="wrapper">
      <ul id="accordion">
          <li>
              <label for="first">Ma premiere question ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="first"></input>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </li>
          <li>
              <label for="second">Ma premiere question ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="second"></input>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </li>
          <li>
              <label for="third">Ma premiere question ? <span>&#x3e;</span></label>
              <input type="radio" name="accordion" id="third"></input>
              <div className="answer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </li>
      </ul>
    </div>
  );
};

export default Faq;