import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyle from "./about.module.scss"
import mainStyle from "../styles/main.module.scss"
import LifeEvent from "../components/lifeEvent"
import Skill from "../components/skill"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPeace, faSmile } from "@fortawesome/free-regular-svg-icons"
import {
    faLaptopCode,
    faGraduationCap,
    faPlane,
    faMicrochip,
    faRocket,
    faCode,
    faTv,
    faWrench,
    faLanguage,
} from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/profile.jpg" }) {
            childImageSharp {
                fixed(width: 500) {
                    src
                }
            }
        }
    }
`

const AboutPage = props => {
    const profilePicture = (
        <img
            src={props.data.file.childImageSharp.fixed.src}
            alt="Marc Backes"
            className={aboutStyle.profilePicture}
        />
    )

    return (
        <Layout>
            <Head title="About" />
            <div className={aboutStyle.about}>
                <div className={aboutStyle.intro}>
                    <div>
                        {profilePicture}
                    </div>
                    <div className={aboutStyle.introText}>
                        <h1>
                            Hello <FontAwesomeIcon icon={faHandPeace} />
                        </h1>
                        <p>
                            Hi, I'm Marc, a happily married,
                            30-something-year-old{" "}
                            <strong>full-stack web developer</strong> 💻 with a
                            strong educational background in software
                            engineering. I am doing freelance work 🚀{" "}
                            <strong>based in Luxembourg</strong> 🇱🇺, but I do
                            work remotely for international clients.
                        </p>
                    </div>{" "}
                </div>

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Work experience <FontAwesomeIcon icon={faLaptopCode} />
                </h1>
                <p>
                    <strong>Currently</strong> I am doing contract work on a
                    real-time full-stack web application
                </p>

                <LifeEvent
                    timePeriod="July 2017 - Current"
                    title="Freelancing full-stack web developer"
                    details="Marc Backes Software Labs"
                    location="Luxembourg 🇱🇺"
                    current={true}
                />

                <LifeEvent
                    timePeriod="April 2019 - Current"
                    title="Solutions Architect & Full-Stack Developer"
                    details="talkevent Software GmbH"
                    location="Germany 🇩🇪"
                    current={true}
                />
                <LifeEvent
                    timePeriod="November 2014 - March 2019"
                    title="Lead Full-Stack Developer"
                    details="talkevent Software GmbH"
                    location="Germany 🇩🇪"
                />
                <LifeEvent
                    timePeriod="September 2016 – June 2017"
                    title="CEO"
                    details="Venios, Inc."
                    location="USA 🇺🇸"
                />
                <LifeEvent
                    timePeriod="May 2014 – September 2014"
                    title="HUB iLab Veracruz"
                    details="Entrepreneur-in-Residence"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="March 2012 – May 2014"
                    title="Director of Engineering and Software Development"
                    details="Universidad de Sotavento"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="January 2013 – January 2014"
                    title="College Professor (Computer Science)"
                    details="Universidad de Sotavento"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="October 2011 – January 2012"
                    title="Mobile Application Developer"
                    details="EducDesign"
                    location="Luxembourg 🇱🇺"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Tech Skills <FontAwesomeIcon icon={faWrench} />
                </h1>

                <div className={aboutStyle.skills}>
                    <Skill name="JavaScript" file="javascript" progress={85} />
                    <Skill name="MongoDB" file="mongodb" progress={75} />
                    <Skill name="Express.js" file="expressjs" progress={60} />
                    <Skill name="Vue.js" file="vuejs" progress={80} />
                    <Skill name="Node.js" file="nodejs" progress={85} />
                    <Skill name="Gatsby.js" file="gatsbyjs" progress={50} />
                    <Skill name="Ruby on Rails" file="rails" progress={80} />
                    <Skill name="PHP" file="php" progress={85} />
                    <Skill name="jQuery" file="jquery" progress={85} />
                    <Skill name="MySQL" file="mysql" progress={90} />
                    <Skill name="WebRTC" file="webrtc" progress={50} />
                </div>
                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Education <FontAwesomeIcon icon={faGraduationCap} />
                </h1>

                <LifeEvent
                    timePeriod="April 2019 - Current"
                    title="Self-Learning"
                    details="Node.js, Express, Vue.js, React.js, Gatsby.js"
                    location="Luxembourg 🇱🇺"
                    current={true}
                />
                <LifeEvent
                    timePeriod="2009 - 2011"
                    title="M.Sc. in Engineering"
                    details="Vorarlberg University of Applied Sciences"
                    location="Austria 🇦🇹"
                />
                <LifeEvent
                    timePeriod="2011"
                    title="Marketing (Exchange Semester)"
                    details="Universidad Istmo Americana"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="2008 - 2009"
                    title="Software Development"
                    details="Engineering College of Copenhagen"
                    location="Denmark 🇩🇰"
                />
                <LifeEvent
                    timePeriod="2006 - 2009"
                    title="B.Sc. in Engineering"
                    details="Vorarlberg University of Applied Sciences"
                    location="Austria 🇦🇹"
                />
                <LifeEvent
                    timePeriod="2002 - 2006"
                    title="Technicien en Informatique (Computer Technician)"
                    details="Lycée des Arts et Métiers"
                    location="Luxembourg 🇱🇺"
                />

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    Language Skills
                    <FontAwesomeIcon icon={faLanguage} />
                </h1>

                <table className={mainStyle.table}>
                    <tr>
                        <td>German 🇩🇪</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>English 🇬🇧</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>Spanish 🇪🇸</td>
                        <td>Fluent</td>
                    </tr>
                    <tr>
                        <td>Luxembourgish 🇱🇺</td>
                        <td>Mothertongue</td>
                    </tr>
                    <tr>
                        <td>French 🇫🇷</td>
                        <td>Basic</td>
                    </tr>
                </table>

                <hr className={aboutStyle.gradientLine} />
                <h1>
                    Interests <FontAwesomeIcon icon={faSmile} />
                </h1>

                <h2>
                    Travel <FontAwesomeIcon icon={faPlane} />
                </h2>
                <p>
                    If you want to hire me, I'm interested to work in companies
                    that offer{" "}
                    <strong>
                        modern technologies such as Node.js, Vue.js, React.js
                    </strong>
                    , etc. I am looking for a role that challenges me and where
                    I can help designing solutions.
                </p>

                <h2>
                    Technology <FontAwesomeIcon icon={faMicrochip} />
                </h2>
                <p>
                    I'm fascinated by technological advances which companies
                    such as Tesla, SpaceX, Boston Dynamics make.
                </p>

                <h2>
                    Startups & Companies <FontAwesomeIcon icon={faRocket} />
                </h2>
                <p>
                    I have a big entrepreneurial and startup curiosity which is
                    devided in two fields. On one hand, small companies which
                    try to make it big such as{" "}
                    <a href="https://avena.io" className={mainStyle.link}>Avena</a> (Mexican-originated
                    fitness app). On the other hand, I like following strategic
                    moves and happenings in big players such as{" "}
                    <strong>Facebook, Netflix, Spotify</strong>.
                </p>

                <h2>
                    Coding <FontAwesomeIcon icon={faCode} />
                </h2>
                <p>
                    This is a classic cliché. After (or before) work, I enjoy
                    some coding on the side. Also, currently I'm focused on
                    catching up with current web technologies such as Node.js,
                    Vue.js, React.js, JAMstack (Gatsby, Nuxt).
                </p>

                <h2>
                    Cinema & TV <FontAwesomeIcon icon={faTv} />
                </h2>
                <p>
                    I love almost any kind of movie, but I always prefer DC and
                    Marvel movies. As of TV: I enjoy my sitcoms like
                    F·R·I·E·N·D·S (all-time favorite), HIMYM, TBBT as well as
                    superhero-themed shows (Flash, Arrow), dramas (Dexter,
                    Breaking Bad, GoT), among others.
                    <br />
                    <small>
                        (If you want to engange in lengthy conversations with
                        me, these are the way to go.)
                    </small>
                </p>
            </div>
        </Layout>
    )
}

export default AboutPage
