import { ItemContainer } from './styles';

interface ExperienceProps {
  year: number;
  position: string;
  description: string;
}

export function ExperienceItem( {year, position, description }: ExperienceProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{position}</h2>
        <p> {description} </p>
      </div>
    </ItemContainer>
  );
}
