const Textomeme = () => {
    return (
        <div className="text-center">
            <h3 className="mt-3 mb-3 text-center">Ingresa el texto para el meme</h3>
            <input className="form-control w-50 m-auto d-block" type="text" placeholder="Pone tu frase" arila-label="default input example"></input>

            <button type="button" className="btn btn-primary m-auto mt-4 mb-4">Descargar Meme</button>
        </div>
    );
}

export default Textomeme;