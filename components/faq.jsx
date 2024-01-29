const Faq = () => {
  return (
    <section id="faq">
				<ol className="faq">
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">C'est quoi "L'investigateur : le mythe de Cthulhu" ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>Une enquête immersive dans l'univers d'H.P Lovecraft.</p>
						</div>
					</li>
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">De quoi ai-je besoin pour commencer l'enquête ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>L'investigation commence dès la réception du colis.</p>
						</div>
					</li>
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">Quel lien avec les NFT ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>Pour ceux qui le souhaite, il est possible d'acquérir la boîte via un NFT. Cela permet de l'avoir en précommande, des cadeaux en plus dans le colis et des réductions sur les prochaines enquêtes.</p>
						</div>
					</li>
				</ol>
			</section>
  );
};

export default Faq;