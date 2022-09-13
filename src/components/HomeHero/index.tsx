import picture from '../../assets/chama.jpg';
import { MarkGithubIcon } from '@primer/octicons-react';
import { Container, TextContainer, InfoContainer, CodeItem } from './styles';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Chama bb"/>
      <div>
        <TextContainer>
          <h1>Hello, </h1>
          <h2>Paulo here</h2>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className='comment'> // resume</span>
            <span className='purple'>Infos: </span> {'\u007B'}

          <div>
            First Name: <span className='blue'>Paulo André</span>
          </div>
          <div>
            Lastname: <span className='blue'>Gomes de B Filho</span>
          </div>
          {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className='purple'>Fullstack dev </span> {'\u007B'}

          <div>
            <MarkGithubIcon size={16} />
            <a  className='blue' href="https://github.com/pauloandre23">  https://github.com/pauloandre23</a>
          </div>
          <div>
            Past companies: <span className='blue'>Avanade, Gowdock</span>
          </div>
          {'\u007D'}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}
