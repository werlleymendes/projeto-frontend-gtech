


function Header (){

    return(
        <div id="Header">
            <div id="superior">
                <div id="superior1">
                    <div className="sup1item"><img src="./src/assets/logo-header.svg" alt="Logo Digital Store" /></div>
                    <div className="sup1item">
                        <form action="">
                            <input type="text" id="pesquisa" placeholder="Pesquisar produto ..."/>
                        </form>
                    </div>
                    <div className="sup1item" id="cadastro">
                        <p>Cadastre-se</p>
                        <button>Entrar</button>
                    </div>
                </div>
                <div id="superior2">
                    <img src="./src/assets/mini-cart.svg" alt="Carrinho de Compras" />
                </div>
            </div>
            <div id="inferior">
                <div><p>Home</p></div>
                <div><p>Produtos</p></div>
                <div><p>Categorias</p></div>
                <div><p>Meus Pedidos</p></div>
            </div>
        </div>
    )
}


export default Header;