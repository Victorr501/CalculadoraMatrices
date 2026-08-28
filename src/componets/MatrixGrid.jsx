{/* Este es el commponete de la matriz para que se vea graficametne */ }

import style from './MatrixGrid.module.css'; 

function MatrixGrid({ nombre }) {
  return (
      <div className={style.container}>
          <h3 className={style.title}>{nombre}</h3>
    
          <div className={style.grid}>
              <input type="number" placeholder="0" className={style.cell} />
              <input type="number" placeholder="0" className={style.cell} />
              <input type="number" placeholder="0" className={style.cell} />
              <input type="number" placeholder="0" className={style.cell} />
          </div>
      </div>
  );
}

export default MatrixGrid;