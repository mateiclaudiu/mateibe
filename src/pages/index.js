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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectImg = styled.div`
  width: 20%;
  padding:0 2% 0 2%;
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
    padding: `1vw 6vw`,
    fontFamily: `'Muli', sans-serif`,
  }}>
    {children}
  </div>
)

const LinkedInButton = styled.div`
  padding: 0.4rem 0.2rem;
  width: 11rem;
  background: rgb(0, 115, 177);
  color: white;
  text-align: center;
  border-radius: 2px;
  font-family: 'Muli', sans-serif;
  position: fixed;
  bottom: 0;
  right: 0;
`

const LinkedInContact = () => (
  <LinkedInButton>
    <a style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/claudiumatei/" target="_blank">Contact me on LinkedIn</a>
  </LinkedInButton>
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
/*
  height: "600px",
*/
}

const Iam = () => (
  <div><h1 style={{
    color: "#d87679", fontFamily: `'Poppins', sans-serif`, marginTop: `4vw`,
  }}>i am claudiu matei<MyDot>.</MyDot></h1>

    <div style={{
      fontSize: `5rem`,
      lineHeight: `6vw`,
      display: `flex`,
      alignItems: `flex-end`,
      minHeight: `200px`,

    }}>
      {/*
    <div style={{ float: `left` }}>I AM&nbsp;</div>
*/}
      <div style={{ alignSelf: `normal`, fontWeight: `100`,fontSize:`5vw`,paddingBottom:`17vw` }}><p>I AM&nbsp;</p></div>
      {/*<Typewriter
      style={{ float: `left` }}
      options={{
        strings: ["A DEVELOPER", "A PROUD HUSBAND", "A PIANO PLAYER"],
        autoStart: true,
        loop: true,
        delay: "natural",
      }}
    />*/}
      <div style={{ alignSelf: `normal`, fontWeight: `600`, fontSize:`5vw` }}>
        <Typewriter
          style={{ alignSelf: `normal` }}
          onInit={(typewriter) => {
            typewriter.typeString(`
        <span>A DEVELOPER</span>
        <br><span>IMAGINATIVE</span>
        <br><span>A PROUD FIANCÉ</span>
        <br><span>A PIANO PLAYER</span>
        
        `)
              .callFunction(() => {
                console.log("String typed out!")
              })
              // .pauseFor(6000000000)
              // .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted")
              })
              .start()
          }}
        /></div>
    </div>
  </div>
)

const IntroBlock = (children) => (
  <div style={IntroBlockStyle}>
    <TextContainer>
      <Iam/>
    </TextContainer>
  </div>
)

const SkillBar = ({ name, procent }) => (
  <div style={{
    marginTop: "15px",
    fontSize: "0.7rem",
    fontWeight: "lighter",
  }}>
    {name}
    <div className="meter">
      <span style={{ width: procent + "%" }}><span className="progress"></span></span>
    </div>
  </div>
)

const MyDot = styled.span`
  color: #d97578;
  font-family: sans-serif;
`

const MyH2 = ({ title }) => (
  <h2>{title} <MyDot>.</MyDot></h2>
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
      <MyH2 title={"what i do"}/>
      <p>
        As a full stack developer I like to translate the needs of the customer into code using new technologies. I find a pleasure in helping people and
        looking for new solutions, by taking initiative and stepping out of my comfort zone. I love to be challenged and work on projects where I can use and
        improve my existing skills.
        Besides my technical skills I am also an empathic listener and persuasive speaker. </p>
      <SkillBar name={"JAVA"} procent={"93"}/>
      <SkillBar name={"JAVASCRIPT"} procent={"85"}/>
      <SkillBar name={"AWS"} procent={"80"}/>
      <SkillBar name={"SCRUM"} procent={"95"}/>
      <SkillBar name={"ANGULAR"} procent={"85"}/>
      <SkillBar name={"REACT"} procent={"75"}/>
      <SkillBar name={"SQL"} procent={"75"}/>
      <MyH2 title={"project experience"}/>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <ProjectImg> <img src={require("../images/dpg-media.svg")} alt="dpg-media"/></ProjectImg>
        <ProjectImg> <img src={require("../images/nobel-biocare.png")} alt="nobel-biocare"/></ProjectImg>
        <ProjectImg> <img src={require("../images/digipolis.png")} alt="digipolis"/></ProjectImg>
        <ProjectImg> <img src={require("../images/ABVV-FGTB.png")} alt="ABVV-FGTB"/></ProjectImg>
        <ProjectImg> <img src={require("../images/cronos-groep.png")} alt="cronos-groep"/></ProjectImg>
        <ProjectImg> <img src={require("../images/de-juristen.jpg")} alt="de-juristen"/></ProjectImg>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",

      }}>
        <h2>meetups where we could </h2>
        <img style={{ width: "10%", margin: "0 0 0 7px" }} src={require("../images/meetup.svg")} alt="dpg-media"/>
        <MyDot style={{ fontSize: "2.2rem" }}>.</MyDot>
      </div>
      <div>
        AWS User Group Belgium - Angular Belgium - DigAnt Café - DPG Media Tech Talks - jsbe.io
      </div>
    </TextContainer>
    <LinkedInContact/>
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
