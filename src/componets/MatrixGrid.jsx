{/* Este es el commponete de la matriz para que se vea graficametne */ }
import style from './MatrixGrid.module.css'; 

function MatrixGrid({ nombre, matriz, filas, columnas, alCambiarDimensiones, alCambiarCelda }) {
   
    return (
        <div className={style.container}>
            <h3 className={style.title}>{nombre}</h3>

            <div className={style.boton}>
                <label>
                    Filas:
                    <input type="number" min="1" max="10" value={filas || ''}
                        onChange={(e) => {
                            let valor = Number(e.target.value);
                            if (valor < 1) valor = 1;       
                            alCambiarDimensiones(valor, columnas)
                        }}
                        className={style['input-filas']} />
                </label>
                <label>
                    Columnas:
                    <input type="number" min="1" max="10" value={columnas || ''}
                        // Se ponen el { despues del => para indicar que es un bloque de codigo y no una expresion
                        onChange={(e) => {
                            let valor= Number(e.target.value);
                            if (valor < 1) valor = 1;
                            alCambiarDimensiones(filas, valor)
                        }}
                        className={style['input-columnas']} />
                </label>
            </div>
            <div className={style.grid} style={{ '--cols': columnas }}>
                {/* Usamos .map(), que es como un foreach en C# */}
                {/* Ahora añadimos un bucle doble para recorrer las filas y las columnas*/}
                {matriz.map((fila, i) =>
                    fila.map((valor, j) => (
                        <input key={'${i}-${j}'} type="number" className={style.cell} placeholder={valor} onChange={(e) => alCambiarCelda(i, j, Number(e.target.value))} />
                    ))
                )}

            </div>
        </div>
    );
}

export default MatrixGrid;