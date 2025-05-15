import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <main className="space-y-6">
        <BodyText>Nextjs App</BodyText>
        <Title>Nextjs App</Title>
        <Button>test</Button>
        <Button kinds="secondary">test2</Button>
      </main>
    </Wrapper>
  );
}
