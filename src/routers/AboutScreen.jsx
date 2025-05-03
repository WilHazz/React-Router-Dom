export const AboutScreen = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <span>
            <h2>Un poco de Historia</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nobis
            sed error aut ab ducimus nemo ipsum sequi tenetur excepturi aliquam
            similique labore eveniet consequuntur dicta nostrum rerum corrupti,
            quae, suscipit quod. Tempore esse aliquid pariatur commodi eveniet
            distinctio exercitationem quaerat, impedit porro, animi autem
            voluptatibus hic dolor error. Praesentium minus consequuntur nisi
            iusto sequi architecto corporis voluptatem voluptatum laborum!
          </span>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Misión</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Visión</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Equipo</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
