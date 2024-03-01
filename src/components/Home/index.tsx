import * as H from "./style"

const Home = () => {
    return (
        <H.HomeStyle>
            <H.InfoStyle>
                <H.ContentInfo>
                    <p>Eu sou o Gabriel Souza </p>
                    <h3> Desenvolvedor Full Stack</h3>
                    <button>Contato</button>
                </H.ContentInfo>
                <a href="https://www.linkedin.com/in/gabrielsouza-dev/" target="black">
                    <H.ContentImage src="/perfil.png" />
                </a>
            </H.InfoStyle>
        </H.HomeStyle>
    )
}

export { Home }