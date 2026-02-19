import { useState } from "react";
import styles from './Header.module.css';

function Header() {
    const [menuAberto, seteMenuAberto] = useState(false);

    const [buscaAberta, setBuscaAberta] = useState(false);

    const toggleMenu = () => {
        seteMenuAberto(!menuAberto);
    };
    const toggleBusca = () => setBuscaAberta(!buscaAberta);

    return (
        <div id={styles.Header}>
            <div id={styles.superior}>
                <div id={styles.superior1}>
                    <div className={styles['menu-hamburguer']} onClick={toggleMenu}>
                        <div className={styles.barra}></div>
                        <div className={styles.barra}></div>
                        <div className={styles.barra}></div>
                    </div>
                    
                    <div className={styles.sup1item}>
                        <img src="./src/assets/logo-header.svg" alt="Logo Digital Store" />
                    </div>

                    <div className={`${styles.sup1item} ${styles['search-container']} ${buscaAberta ? styles.buscaAtiva : ''}`}>
                        <form action="">
                            <input type="text" id={styles.pesquisa} placeholder="Pesquisar produto ..."/>
                        </form>
                    </div>

                    <div className={styles.sup1item} id={styles.cadastro}>
                        <p>Cadastre-se</p>
                        <button>Entrar</button>
                    </div>
                </div>

                <div id={styles.superior2}>
                    <img 
                        src="./src/assets/search-icon.svg" 
                        alt="Pesquisar" 
                        className={styles.iconeBuscaMobile} 
                        onClick={toggleBusca} 
                    />

                    <img src="./src/assets/mini-cart.svg" alt="Carrinho de Compras" />
                </div>
            </div>

            <div id={styles.inferior} className={menuAberto ? styles.aberto : ""}>
                <div className={styles['fechar-menu']} onClick={toggleMenu}>&times;</div>
                <div><p>Home</p></div>
                <div><p>Produtos</p></div>
                <div><p>Categorias</p></div>
                <div><p>Meus Pedidos</p></div>
            </div>

            {menuAberto && <div className={styles.overlay} onClick={toggleMenu}></div>}
            
        </div>
    );
}

export default Header;