import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/articles'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <br />
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Software Developer!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Taylor Yip
            </Heading>
            <p>( Software Developer / Graphic Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/taylor.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <br />

        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Monterey Park, California
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            <b>Graphic Designer &#38; Web Designer</b> for{' '}
            <u>
              <i>
                <a style={{ color: 'teal' }} href="https://revautocarcare.com/">
                  www.revautocarcare.com
                </a>
              </i>
            </u>
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Graduated from <i>West Covina High School</i>
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            <b>Graphic Designer, Web Designer, and Auto Detailer</b> for{' '}
            <u>
              <i>
                <a
                  style={{ color: 'teal' }}
                  href="https://aerowerkz.com/index.html"
                >
                  www.aerowerkz.com
                </a>
              </i>
            </u>
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from{' '}
            <i>General Assembly&apos;s Software Engineering Fellowship</i>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at <i>Newegg</i> as a <b>RMA Repair Specialist</b>
          </BioSection>
        </Section>

        <br />

        <Section delay={1.1}>
          <Heading as="h3" variant="section-title">
            I <b style={{ color: '#ff6961' }}>❤</b>
          </Heading>
          <BioSection>
            <BioYear>Design</BioYear>
            Lorem ipsum
          </BioSection>
          <BioSection>
            <BioYear>Music</BioYear>
            Lorem ipsum
          </BioSection>
          <BioSection>
            <BioYear>Cars</BioYear>
            Lorem ipsum
          </BioSection>
          <BioSection>
            <BioYear>Video Games</BioYear>
            Lorem ipsum
          </BioSection>
        </Section>

        <br />

        <Section delay={1.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/yippptay" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @yippptay
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/lmaoyip" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @lmaoyip
                </Button>
              </Link>
            </ListItem>
          </List>

          <br></br>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://youtube.com/flumples"
              title="Flumples"
              thumbnail={thumbYouTube}
            >
              <i>My YouTube channel</i>
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>

          <br></br>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
