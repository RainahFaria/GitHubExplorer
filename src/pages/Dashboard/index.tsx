import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';



const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/63857037?s=460&u=f81f9e46ba69892735e44a72bf90caeca6e10a75&v=4" 
                    alt="Rainah Faria"/>
                    <div>
                        <strong>RainahFaria/Ecoleta</strong>
                        <p>Cadastro e pesquisa de pontos de coleta de resíduos.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/63857037?s=460&u=f81f9e46ba69892735e44a72bf90caeca6e10a75&v=4" 
                    alt="Rainah Faria"/>
                    <div>
                        <strong>RainahFaria/Ecoleta</strong>
                        <p>Cadastro e pesquisa de pontos de coleta de resíduos.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/63857037?s=460&u=f81f9e46ba69892735e44a72bf90caeca6e10a75&v=4" 
                    alt="Rainah Faria"/>
                    <div>
                        <strong>RainahFaria/Ecoleta</strong>
                        <p>Cadastro e pesquisa de pontos de coleta de resíduos.</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;