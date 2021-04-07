import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
            //Solucionar problema de re-rendirzación cuando componente
            //está desmontado
            isMounted.current = false;
        }
    },[])

    useEffect (() => {

        setState({ data:null, loading:true, error:null })

        fetch(url) 
            .then( resp => resp.json() )
            .then( data => {
                //Ejecuto el setState solo si el componente esta montado
                //Para evitar errores
                if( isMounted.current ) {
                    setState({
                        loading: false,
                        error: false,
                        data
                    })
                }              
            })
            .catch(()=> {
                setState({
                    data: null,
                    loading: true,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url]);

    return state;

}   
