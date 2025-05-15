import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { ImageInput } from '@ui/ImageInput';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import { Select } from '@ui/Select';
import { BodyText, Title } from '@ui/Text';
import { TextArea } from '@ui/Textarea';
import { Wrapper } from '@ui/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <main className="space-y-6">
        <BodyText>Nextjs App</BodyText>
        <Title>Nextjs App</Title>
        <Button>test</Button>
        <Button kinds="secondary">test2</Button>
        <Input label="test" placeholder="test" />
        <PasswordInput label="test" placeholder="test" />
        <TextArea label="test" placeholder="test" />
        <Checkbox />
        <Select label="text" />
        <ImageInput onChange={() => console.log('test Image Input')} />
      </main>
    </Wrapper>
  );
}
