import { useState } from 'react';
import Layout from './componets/Layout';
import MatrixGrid from './componets/MatrixGrid';
import style from './App.module.css';

function crearMatriz(filas, columnas) {
    {/* Esto lo que hace es crear un array que dentro tenga otros arrays con longitud columnas y que tengan el valor 0 */ }
    return Array.from({ length: filas }, () =>
        // Que hace el metodo fill() es rellenar un array con un valor especifico en este caso 0
        Array(columnas).fill(0)
    );
}

function App() {
    /* Estos apuntes son mios para aprender */
    /* Creamos las matrices como valores (2x2) y lo que hay que meter en los paranteis de useState es el valor inicial en este caso un array 2x2 tambien podria ser un int o un string */
    const [matrizA, setMatrizA] = useState(crearMatriz(2, 2));
    const [matrizB, setMatrizB] = useState(crearMatriz(2, 2));

    const [matrizResultado, setMatrizResultado] = useState(null);

    /* Esto lo que hace es crear una nueva matriz con todos los valores como 0 ahi que revisar */
    const cambiarDimensionesA = (nuevasFilas, nuevasColumnas) => {
        setMatrizA((estadoPrevio) => {
            return Array.from({ length: nuevasFilas }, (_, i) =>
                Array.from({ length: nuevasColumnas }, (_, j) => {
                    const filaExiste = i < estadoPrevio.length;
                    const columnaExiste = filaExiste && j < estadoPrevio[i].length;

                    if (filaExiste && columnaExiste) {
                        return estadoPrevio[i][j];
                    } else {
                        return 0; // Valor por defecto para nuevas celdas
                    }
                })
            );
        });
    }

    const cambiarCeldaA = (indiceFila, indiceColumna, nuevoValor) => {
        // Esto lo tengo que revisar pero vale por lo que entiendo que como es una arraw function hace falta el return y lo deuvelve a fila.map no a lo otro porque la arrow funtion y que lo que hace es crear una nueva matriz con los valores de la matrizA y cambiar el valor de la celda que le pasamos por parametro
        // Entonces hace una matriz sobre una matriz
        const nuevaMatrizA = matrizA.map((fila, i) =>
            fila.map((celda, j) => {
                if (i === indiceFila && j === indiceColumna) {
                    return nuevoValor;
                }
                return celda;
            })
        );

        setMatrizA(nuevaMatrizA);

    };

    const cambiarDimensionesB = (nuevasFilas, nuevasColumnas) => {
        setMatrizB((estadoPrevio) => {
            return Array.from({ length: nuevasFilas }, (_, i) =>
                Array.from({ length: nuevasColumnas }, (_, j) => {
                    const filaExiste = i < estadoPrevio.length;
                    const columnaExiste = filaExiste && j < estadoPrevio[i].length;

                    if (filaExiste && columnaExiste) {
                        return estadoPrevio[i][j];
                    } else {
                        return 0;
                    }
                })
            );
        });
    };

    const cambiarCeldaB = (indiceFila, indiceColumna, nuevoValor) => {
        const nuevaMatrizB = matrizB.map((fila, i) =>
            fila.map((celda, j) => {
                if (i === indiceFila && j === indiceColumna) {
                    return nuevoValor;
                }
                return celda;
            })
        );
        setMatrizB(nuevaMatrizB);
    };

    // Aqui es donde va la logica de las sumas, resta y multiplicacion de matrices
    //

    const sumarMatrices = () => {
        if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
            alert("Para sumar, las matrices deben tener las mismas dimensiones.");
            return;
        }

        const resultado = matrizA.map((fila, i) =>
            fila.map((valorA, j) => {
                const valorB = matrizB[i][j];
                return valorA + valorB;
            })
        );

        setMatrizResultado(resultado);
    };

    const restarMatrices = () => {
        if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
            alert("Para restar, las matrices deben tener las mismas dimensiones.");
            return;   
        }

        const resultado = matrizA.map((fila, i) => 
            fila.map((valorA, j) => {
                const valorB = matrizB[i][j];
                return valorA - valorB;
            })
        );

        setMatrizResultado(resultado);
    };

    const multiplicarMatrices = () => {
        if (matrizA.length === 0 || matrizB.length === 0 || matrizA[0].length !== matrizB.length) {
            alert("Para multiplicar, el número de columnas de la Matriz A debe ser igual al número de filas de la Matriz B."); ç
            return;
        }

        const filasA = matrizA.length;
        const columnasA = matrizA[0].length;
        const filasB = matrizB.length;
        const columnasB = matrizB[0].length;

        const resultado = Array.from({ length: filasA }, () => 
            Array(columnasB).fill(0)
        );

        for (let i = 0; i < filasA; i++) {
            for (let j = 0; j < columnasB; j++) {

                let sumaTemporal = 0;
                for (let k = 0; k < columnasA; k++) {
                    sumaTemporal += matrizA[i][k] * matrizB[k][j];
                }

                resultado[i][j] = sumaTemporal;
            }
        }

        setMatrizResultado(resultado);
    };

    
    return (
        <Layout>
            <h2>Área de Operaciones</h2>
            <p>Introduce los valores de tus matrices:</p>

            <div className={style.divMatriz}>
                {/* Vale lo que pasa es que tu puedes guardar una funcion como si fuera una variable en vez de usar clases y objetos y entonces en matrizGRid tiene que combinar los de esta constante como si fuera python no es tan estricto como Java  */}
                <MatrixGrid nombre="Matriz A" matriz={matrizA} filas={matrizA.length} columnas={matrizA[0]?.length} alCambiarDimensiones={cambiarDimensionesA} alCambiarCelda={cambiarCeldaA} />

                <div className={style.divBotones}>
                    <button onClick={sumarMatrices} className={style.boton}>Sumar (+)</button>
                    <button onClick={restarMatrices} className={style.boton}>Restar (-)</button>
                    <button onClick={multiplicarMatrices} className={style.boton}>Multiplicar (*)</button>
                </div>

                {/* La estructura de una arraw function es muy simple es ( Aqui va las variables ) => { Aqui va lo que hace }, la pregunta es eso en una contante esta bien pero en metodos de clases como el Array.Map() implica que siempre tiene que tener las varibles justas */} 
                <MatrixGrid nombre="Matriz B" matriz={matrizB} filas={matrizB.length} columnas={matrizB[0]?.length} alCambiarDimensiones={cambiarDimensionesB} alCambiarCelda={cambiarCeldaB} />
            </div>


            {/* Esto es lo que hace es mostrar la matriz solo si existe sino no aparece nada */}
            {matrizResultado && (
                <MatrixGrid nombre="Matriz C" matriz={matrizResultado} filas={matrizResultado.length} columnas={matrizResultado[0]?.length} alCambiarCelda={() => { }} alCambiarDimensiones={() => { }} />
            )}
        </Layout>
    )
}

export default App
