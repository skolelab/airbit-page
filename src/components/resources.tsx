const Resources = () => {
  return (
    <>
      <div className="list-group-item">
        <iframe
          src="https://uit.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=b947a994-23cc-4e67-8436-ae3200998b83&autoplay=false&offerviewer=false&showtitle=true&showbrand=true&captions=false&interactivity=none"
          height="405"
          width="720"
          allowFullScreen
          allow="autoplay"
        />
      </div>
      <div className="list-group-item">
        <iframe
          src="https://uit.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=48754b3a-16e1-4dd8-a557-ae3200d45c05&autoplay=false&offerviewer=false&showtitle=true&showbrand=true&captions=false&interactivity=none"
          height="405"
          width="720"
          allowFullScreen
          allow="autoplay"
        />
      </div>

      <div className="list-group">
        <a
          href="https://mediasite.uit.no/Mediasite/Play/615b685c10184cd5acc85057a4570f861d?catalog=5b4daacc-72c8-43c3-916b-26069b189466"
          target="_blank"
          title="Luftkvalitetsvarsling 2.0"
          className="media list-group-item"
        >
          <div className="media-body">
            <h3 className="mt-0 mb-1 list-group-item-header">
              Luftkvalitetsvarsling 2.0
            </h3>
            Thomas Olsen fra Metrologisk institutt, Tromsø
            <br />
            <small className="text-muted">
              24. oktober 2017
              <br />
              46 Minutter, 27 sekunder
            </small>
          </div>
          <img
            className="ml-3 resource-media-preview"
            alt="Luftkvalitetsvarsling 2.0"
            src="https://mediasite.uit.no/Mediasite/FileServer/Presentation/615b685c10184cd5acc85057a4570f861d/ea0422ea-6c1b-4967-b65d-680fafb1cef1_500_282.jpg"
          />
        </a>
        <a
          href="https://mediasite.uit.no/Mediasite/Play/73bf99a3518f4690bff1edba8c4fe50c1d?catalog=5b4daacc-72c8-43c3-916b-26069b189466"
          target="_blank"
          title="Det er noe i luften: Luftkvaliteten i norske byer"
          className="media list-group-item"
        >
          <div className="media-body">
            <h3 className="mt-0 mb-1 list-group-item-header">
              Det er noe i luften: Luftkvaliteten i norske byer
            </h3>
            Sonja Grossberndt, Forsker ved NILU
            <br />
            <small className="text-muted">
              24. oktober 2017
              <br />
              27 Minutter, 7 sekunder
            </small>
          </div>
          <img
            className="ml-3 resource-media-preview"
            alt="Luftkvalitetsvarsling 2.0"
            src="https://mediasite.uit.no/Mediasite/FileServer/Presentation/73bf99a3518f4690bff1edba8c4fe50c1d/43170b88-0772-4153-abea-372c2989e029_500_282.jpg"
          />
        </a>
        <a
          href="https://mediasite.uit.no/Mediasite/Play/c700d34079c94042be290689b687fd721d?catalog=5b4daacc-72c8-43c3-916b-26069b189466"
          target="_blank"
          title="Forurensing og lungesykdom"
          className="media list-group-item"
        >
          <div className="media-body">
            <h3 className="mt-0 mb-1 list-group-item-header">
              Forurensing og lungesykdom
            </h3>
            Juan Carlos Aviles, Stipendiat Juan Carloos Aviles, allemenmedisin
            forskningsenhet
            <br />
            <small className="text-muted">
              24. oktober 2017
              <br />
              15 Minutter, 22 sekunder
            </small>
          </div>
          <img
            className="ml-3 resource-media-preview"
            alt="Luftkvalitetsvarsling 2.0"
            src="https://mediasite.uit.no/Mediasite/FileServer/Presentation/c700d34079c94042be290689b687fd721d/cd7bd1ff-c9f9-4d85-ab23-1af464b9303a_500_282.jpg"
          />
        </a>
        <a
          href="https://mediasite.uit.no/Mediasite/Play/52fa1dec22e549a78008414d15c1f15e1d"
          target="_blank"
          title="Tips og triks fra en forsker"
          className="media list-group-item"
        >
          <div className="media-body">
            <h3 className="mt-0 mb-1 list-group-item-header">
              Tips og triks fra en forsker
            </h3>
            Bjørn Fjukstad, Stipendiat Institutt for informatikk
            <br />
            <small className="text-muted">
              15. januar 2018
              <br />
              17 Minutter, 2 sekunder
            </small>
          </div>
          <img
            className="ml-3 resource-media-preview"
            alt="Tips og triks fra en forsker"
            src="/public/img/TipsOgTrikPreview.png"
          />
        </a>
      </div>
    </>
  );
};
export default Resources;
