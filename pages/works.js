import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png' /** UPDATE NEEDED **/
import thumbWalknote from '../public/images/works/walknote_eyecatch.png' /** UPDATE NEEDED **/
import Layout from '../components/layouts/articles'

const Works = () => {
  /** WorkGridItem UPDATE NEEDED **/
  return (
    <Layout>
      <br />
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              Lorem ipsum
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" thumbnail={thumbWalknote}>
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="modetokyo"
                title="Modetokyo"
                thumbnail={thumbInkdrop}
              >
                Mode.Tokyo
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="walknote" thumbnail={thumbWalknote}>
                Music recommendation app for iOS
              </WorkGridItem>
            </Section>
          </SimpleGrid>

          <Section>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
              Other Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Section>
                <WorkGridItem
                  id="inkdrop"
                  title="Inkdrop"
                  thumbnail={thumbInkdrop}
                >
                  Lorem ipsum
                </WorkGridItem>
              </Section>
              <Section>
                <WorkGridItem id="walknote" thumbnail={thumbWalknote}>
                  Music recommendation app for iOS
                </WorkGridItem>
              </Section>
            </SimpleGrid>
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
