import { ExperienceItem } from './ExperienceItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experience() {
  return (
    <Container>
      <SectionTitle title="#03 years" description="of experience" />
      <section>
        <ExperienceItem year={1234} description="wow" position="Fullstack intern" />
        <ExperienceItem year={1234} description="wow" position="Fullstack intern" />
        <ExperienceItem year={1234} description="wow" position="Fullstack intern" />
        <ExperienceItem year={1234} description="wow" position="Fullstack intern" />
      </section>
    </Container>
  );
}
