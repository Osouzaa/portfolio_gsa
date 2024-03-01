import * as H from "./style"
const Header = () => {
    return (
        <H.HeaderStyle>
            <H.NavStyled>
                <H.Name> Gabriel Souza</H.Name>
                <H.UlStyle>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </H.UlStyle>
            </H.NavStyled>

        </H.HeaderStyle>
    )
}

export { Header }