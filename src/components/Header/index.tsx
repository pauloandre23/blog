import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        {/* <NavLink title="Projects" path="/" /> */}
        <NavLink title="Blog" path="/blog" />
      </ul>
    </Container>
  );
}
