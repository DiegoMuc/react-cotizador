import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);
    

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };
    
    const cotizarSeguro = () => {
        // Una Base
        let resultado = 6000;

        // Diferencia de años 
        const diferencia = obtenerDiferenciaYear(datos.year);

        // Resta del 3% cada año
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Bugatti 30%
        // McLaren 15%
        // Ferrari 5%
        resultado *= calcularMarca(datos.marca);

        // Basico 20%
        // Plus 50%
        resultado *= calcularPlan(datos.plan);

        resultado = resultado.toFixed(2);

        //Formatear Dinero
        resultado = formatearDinero(resultado);
        
        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
        
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext;