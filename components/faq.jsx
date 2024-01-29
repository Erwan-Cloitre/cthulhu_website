const Faq = () => {
  return (
    <section id="faq">
				<ol className="faq">
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">C&apos;est quoi &quot;L&apos;investigateur : le mythe de Cthulhu&quot; ?</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>Une enqu&ecirc;te immersive dans l&apos;univers d&apos;H.P Lovecraft.</p>
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
							<p>Pour ceux qui le souhaite, il est possible d&apos;acqu&eacute;rir la boîte via un NFT. Cela permet de l&apos;avoir en pr&eacute;commande, des cadeaux en plus dans le colis et des r&eacute;ductions sur les prochaines enqu&ecirc;tes.</p>
						</div>
					</li>
				</ol>
			</section>
  );
};

export default Faq;