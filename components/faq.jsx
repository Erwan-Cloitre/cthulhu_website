const Faq = () => {
  return (
    <section id="faq">
				<ol className="faq">
					<li>
						<input type="checkbox" className="toggle"/>
						<h3 className="question">C&apos;est quoi &quot;L&apos;investigateur : Eternal Cthulhu&quot; ?</h3>
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
						<h3 className="question">En cours...</h3>
						<div className="icon"></div>
						<div className="border"></div>
						<div className="answer">
							<p>En cours...</p>
						</div>
					</li>
				</ol>
			</section>
  );
};

export default Faq;