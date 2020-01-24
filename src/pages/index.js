import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typewriter from "typewriter-effect"
import { LandingStyles } from "../components/styles"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage2 = () => (
  <Layout>
    <SEO title="Home"/>
    <div id="landing" style={LandingStyles}>
      <h1>matei</h1>
    </div>
    <Container>Claudiu</Container>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const TextContainer = ({ children }) => (
  <div style={{
    padding: `1rem 4rem`,
    fontFamily: `'Muli', sans-serif`,
  }}>
    {children}
  </div>
)

const skills = [
  { type: "Java", level: 90 },
  { type: "Agile", level: 90 },
  { type: "Javascript", level: 75 },
  { type: "AWS", level: 75 },
  { type: "Angular", level: 65 },
  { type: "React", level: 60 },
]

const LinkedInContact = () => (
  <div style={{
    padding: "0.4rem 0.2rem",
    width: "11rem",
    background: "rgb(0, 115, 177)",
    color: "white",
    textAlign: "center",
    borderRadius: "2px",
    fontFamily: `'Muli', sans-serif`,
    position: "fixed",
    bottom: 0,
    right: 0,
  }}>
    <a style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/claudiumatei/" target="_blank">Contact me on LinkedIn</a>
  </div>
)

const Bar = ({ children }) => (
  <div style={{
    backgroundColor: `#007a80`,
    padding: `0rem 4rem`,
    fontFamily: `'Muli', sans-serif`,
    color: `white`,
    textAlign: `right`,
    fontSize: `70%`,
  }}

  >
    {children}
  </div>
)

const IntroBlockStyle = {
  background: "black",
  color: "white",
  height: "600px",
}

const Iam = () => (
  <div style={{
    fontSize: `5rem`,
    marginTop: `7rem`,

  }}>
    <div style={{ float: `left` }}>I AM&nbsp;</div>
    <Typewriter
      style={{ float: `left` }}
      options={{
        strings: ["JAVA DEVELOPER", "JS DEVELOPER", "PIANIST"],
        autoStart: true,
        loop: true,
        delay: "natural",
      }}
    />
  </div>
)

const IntroBlock = (children) => (
  <div style={IntroBlockStyle}>
    <TextContainer>
      <h1 style={{ color: "#d87679", fontFamily: `'Poppins', sans-serif` }}>i am claudiu matei</h1>
      <Iam/>
    </TextContainer>
  </div>
)

const SkillBar = ({name, procent}) => (
  <div style={{marginTop:"15px"}}>
    {name}
    <div className="meter">
      <span style={{ width: procent+"%" }}><span className="progress"></span></span>
    </div>
  </div>
)

const colors = {
  bar: "#d97578",
  title: {
    text: "#fff",
    background: "#d97578",
  },
}

const IndexPage = () => (
  <div>
    <SEO title="Home"/>
    <IntroBlock/>
    <Bar>JAVA - JAVASCRIPT - REACT - ANGULAR - SPRINGBOOT - AWS - AGILE</Bar>
    <TextContainer>
      <h2>what i do</h2>
      <p>
        As a full stack developer I like to translate the needs of the customer into code using new technologies. I find a pleasure in helping people and
        looking for new solutions, by taking initiative and stepping out of my comfort zone. I love to be challenged and work on projects where I can use and
        improve my existing skills.
        Besides my technical skills I am also an empathic listener and persuasive speaker. </p>
      <SkillBar name={"JAVA"} procent={"90"}></SkillBar>
      <SkillBar name={"JAVASCRIPT"} procent={"70"}></SkillBar>
      <SkillBar name={"AWS"} procent={"80"}></SkillBar>
      <SkillBar name={"AGILE"} procent={"85"}></SkillBar>
      <h2>project experience</h2>
      <div>
        DPG Media - Nobel Biocare - ABVV/FGTB - Digipolis Antwerpen - Cronos - Spectr
      </div>
      <h2>meetups i like to participate to</h2>
      <div>
        AWS User Group Belgium - Angular Belgium - DigAnt Café - DPG Media Tech Talks - jsbe.io
      </div>
    </TextContainer>
    <LinkedInContact></LinkedInContact>
  </div>
)

class Class extends React.Component {

  render() {
    return (
      <div>

      </div>
    )
  }
}

/*class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  render() {
    return (
      <React.Fragment>
        <h1>matei</h1>
        <h2>Freelancer</h2>
        <button onClick={this.scrollToContent} aria-label="scroll">go</button>
      </React.Fragment>
    )
  }
}*/

export default IndexPage
