const Faq = () => {
  return (
    <section id="faq">
				<ol className="faq">
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">C'est quoi "L&apos;investigateur : le mythe de Cthulhu" ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>Une enqu&ecirc;te immersive dans l&apos;univers d'H.P Lovecraft.</p>
						</div>
					</li>
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">De quoi ai-je besoin pour commencer l&apos;enqu&ecirc;te ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>L&apos;investigation commence dès la r&eacute;ception du colis.</p>
						</div>
					</li>
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">Quel lien avec les NFT ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>Pour ceux qui le souhaite, il est possible d'acqu&eacute;rir la boîte via un NFT. Cela permet de l&apos;avoir en pr&eacute;commande, des cadeaux en plus dans le colis et des r&eacute;ductions sur les prochaines enqu&ecirc;tes.</p>
						</div>
					</li>
				</ol>
			</section>
  );
};

export default Faq;