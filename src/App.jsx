import Layout from './componets/Layout';
import MatrixGrid from './componets/MatrixGrid';
import style from './App.module.css';


function App() {
    return (
        <Layout>
            <h2>Área de Operaciones</h2>
            <p>Introduce los valores de tus matrices:</p>

            <div className={style.divMatriz}>
                <MatrixGrid nombre="Matriz A" />
                <MatrixGrid nombre="Matriz B" />
            </div>
        </Layout>
    )
}

export default App
