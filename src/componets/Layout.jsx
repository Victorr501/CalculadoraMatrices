import style from './Layout.module.css';

function Layout({ children }) {
  return (
      <>
          <header className={style.header}>
            <h1>Calculadora de Matrices</h1>
          </header>
          <main className={style.main}>
              {/*aqui es donde ira la calcualdora*/}
              {children}
          </main>
          <footer className={style.footer}>
            <p>© 2026 Calculadora de Matrices. Todos los derechos reservados.</p>
          </footer>
      </>
  );
}

export default Layout;