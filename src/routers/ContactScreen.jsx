export const ContactScreen = () => {
  return (
    <>
      <h3 className="container">Escríbenos</h3>
      <form className="container">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Nombre y Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Celular</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comentarios</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ margin: "20px 0px" }}
        >
          Enviar
        </button>
      </form>
    </>
  );
};
