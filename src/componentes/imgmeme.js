import React, {useState} from "react";

const Imgmeme = () => {
    
    const [imgmemes, setImgmemes] = useState();

    const seleccionarImg = (e) => {
        setImgmemes(e.target.value);
    }
    
    return (
        <div>
            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" arial-label=".form deafult example">
                <option value={1}>Futurama</option>
                <option value={2}>Bob Esponja</option>
                <option value={3}>Señora</option>
                <option value={4}>Calamardo</option>
            </select>

            <figure className="text-center p-4">
                <p className="w-100 px-30 text-center position-absolute top-50 start-30 h1"></p>
                <img src={`./memes/${imgmemes}.jpg`} className="figure-img img-fluid mt-3" />
            </figure>
        </div>
    );
}

export default Imgmeme;