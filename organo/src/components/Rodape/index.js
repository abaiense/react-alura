import './Rodape.css'

const Rodape = () => {
    return(
        <section className='footer'>
            <div>
                <div className='icons'>
                    <img src="/img/fb.png " alt="facebook" />
                    <img src="/img/tw.png" alt="twitter" />
                    <img src="/img/ig.png" alt="instagram" />
                </div>
            </div>
            <div>
                <img src="/img/logo.png" alt="Logo Organo" />
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </section>
    )
}

export default Rodape