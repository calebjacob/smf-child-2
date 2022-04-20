import type { NextPage } from 'next';

import { H1 } from '@/components/heading';
import { P } from '@/components/paragraph';
import { Section } from '@/components/section';
import { CrazyThing } from '@/smf-child-1/components/crazy-thing';

const CrazyPage: NextPage = () => {
  return (
    <>
      <Section color="primary" noBorder>
        <H1>Cool Page!!!</H1>

        <P>This is code from a git submodule.</P>
      </Section>

      <Section>
        <CrazyThing title="This is Cool"></CrazyThing>
      </Section>
    </>
  );
};

export default CrazyPage;
