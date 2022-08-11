import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Taylor Yip
          </Heading>
          <p>
            <i>Software Developer</i> / <i>Graphic Designer</i>
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle={'solid'}
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/taylor.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

      <br></br>

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

      <br></br>

      <Section delay={0.7}>
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
    </Container>
  )
}

export default Page
