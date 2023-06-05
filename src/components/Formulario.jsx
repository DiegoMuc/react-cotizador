import { Fragment } from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();

        if( Object.values(datos).includes('') ) {
            setError('Todos los campos son Obligatorios')
            return 
        }
        
        setError('');
        cotizarSeguro();

        // TDDO : Cotizar 
    }

  return (
    <>
        {
            error && <Error />
        }

        <form
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label className="block mb-3 font-bold text-grey-400 uppercase">Marca</label>
                <select 
                    name="marca"
                    className="w-full p-3 border bg-white border-gray-300"
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.marca}
                >
                   <option>-- Seleccionar --</option>

                   {
                    MARCAS.map( marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))
                   }
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-grey-400 uppercase">Año</label>
                <select 
                    name="year"
                    className="w-full p-3 border bg-white border-gray-300"
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.year}
                >
                   <option>-- Seleccionar --</option>

                   {
                    YEARS.map( year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))
                   }
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-grey-400 uppercase">Planes</label>
                <div className="flex gap-3">
                    {
                        PLANES.map( plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input 
                                    type="radio" 
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeDatos(e) }
                                />
                            </Fragment>
                        ))
                    }
                </div>
            </div>

            <input 
                type="submit" 
                className="w-full bg-lime-500 hover:bg-lime-600 
                transition-colors text-white cursor-pointer p-3 font-bold"
                value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario;