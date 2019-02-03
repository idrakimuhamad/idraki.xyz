import styled from 'styled-components'
import Link from 'next/link'

const DateText = styled.p`
  margin-bottom: 0.5rem;
`
const JobContainer = styled.div`
  padding: 1rem 0;
`
const JobDetails = styled.div`
  padding: 1rem 0;
`
const SkillsRow = styled.div`
  padding: 1rem 0;
`
const EducationContainer = styled.div`
  padding: 1rem 0;
`
const ProjectContainer = styled.div`
  padding: 1rem 0;
`
const ProjectDetails = styled.div`
  padding: 1rem 0;
`

const jobs = [
  {
    date: 'Nov 2017 - Present',
    company: 'RHB Bank Berhad (Digital Transformation)',
    title: 'Front-end Architect',
    descriptions: [
      'Making React and React Native part of traditional banking. Changing the bank one step at a time. Involved with RHB Insurance mobile app and admin development.'
    ]
  },
  {
    date: 'Nov 2015 - Oct 2017',
    company: 'Syntronic Malaysia',
    title: 'JavaScript Architect',
    descriptions: [
      'Work directly with projects from the ground up, including the planning and requirement gathering, and also the estimation process.',
      'Lead role in most projects (which using JavaScript frameworks) and this include coaching the junior developers'
    ]
  },
  {
    date: 'April 2015 - Oct 2015',
    company: 'Yoozrr Technology',
    title: 'Senior Developer',
    descriptions: [
      'As a startup, we have a small team of three developers, so each of us took a big responsibility in the project. Our project mainly focusing on logistic management system.',
      'The technology stacks includes Node.js (Sails.js), MongoDB, Angular.js, and React Native, At one point we have to scrap some data from the port Klang Westport and Northport website using Nightmare.js (Phantom.js)'
    ]
  },
  {
    date: 'July 2013 - March 2015',
    company: 'PayPal Malaysia',
    title: 'Merchant/Developer Technical Support',
    descriptions: [
      'Handle and troubleshoot merchant’s and developer’s issue in integrating PayPal’s API in their products.',
      'Mentoring juniors in getting started with the flow of the business and API integration training.'
    ]
  },
  {
    date: 'June 2011 - September 2012',
    company: 'BIZY Multimedia',
    title: 'Web Designer',
    descriptions: [
      'Leading a small group of developers. Main project was an Employee Self Service System for TDM Berhad.',
      'In charge directly with the front-end of the application and the UI/UX.'
    ]
  },
  {
    date: 'March 2011 - May 2011',
    company: 'CRN Solutions',
    title: 'Application Consultant',
    descriptions: [
      'Provide training to customers and troubleshoot any issue they’re having with the software the company built.'
    ]
  }
]

const educations = [
  {
    date: '2012 - 2013',
    course: 'Masters of Information Technology (Management)',
    uni: 'UiTM Shah Alam, Malaysia'
  },
  {
    date: '2006 - 2010',
    course: 'Bachelor Degree of Computer Science (Software Engineering)',
    uni: 'University Malaya, Malaysia'
  }
]

const projects = [
  {
    date: 'Apr 2018 – Present',
    name: 'Bijak Trivia',
    descriptions: [
      'A reality quiz game for the Malaysian audience. With most of the concept borrowed from the breakthrough reality game, we have launched earlier this year'
    ],
    url: 'http://www.bijaktrivia.com/'
  },
  {
    date: 'Nov 2017 – June 2018',
    name: 'RHB Insurance',
    descriptions: [
      'RHB Insurance mobile app is first of its kind from banks in Malaysia, that provide customers the ability to get free quotation and policy purchases from the comfort of their mobile phone.',

      'Involvement',

      'As Front end developer, I took care of the mobile app development and also some of the back office application that we need to cater for the customer.',

      'We use React Native for the mobile app, and React/Next for the admin site.'
    ],
    url: 'https://www.rhbgroup.com/insurance_app/index.html'
  },
  {
    date: 'Mar 2017 – Oct 2017',
    name: 'Tecforte MSSGARD Redesign',
    descriptions: [
      'I was tasked to help out Tecforte with the redesign and development of their latest product. Bringing my experience as a front end developer and designer, I also involved with coaching and mentoring other team members about Angular and JavaScript, with some of the best known practices in the web app approach, especially the HTML structure and semantic code, and provide some suggestion and insight in regards to the art direction and User experience of the software.'
    ],
    url: 'http://tecforte.com/mssgard/'
  },
  {
    date: 'Oct 2016 – Jan 2017',
    name: 'Capital DK: Atlas',
    descriptions: [
      'As an onsite consultant, my task was to provide the Capital DK team with my experience to help them speed up their development which slightly behind schedule.',

      `They’ve invested in Meteor but without enough resource that actually proficient with it and MongoDB.`,

      `I was assigned to develop some of the core module with Meteor, for both front end and back end side of the application, while working with some MongoDB and UI.`
    ],
    url: 'https://www.capitaldk.com/solutions/'
  },
  {
    date: '2016',
    name: 'Sprezzatura Coffee',
    descriptions: [
      'Design and develop the website for Sprezzatura Coffee, a cafe and coffee beans supplier. They decided to launch their very own website, and online shop due to high demand from their customer. The site run on top of Shopify eCommerce platform.'
    ],
    url: 'https://sprezzaturacoffee.com/'
  },
  {
    date: 'Apr 2013 – Jan 2014',
    name: 'Cabbr - Black Cab Booking',
    descriptions: [
      'A project for a client who wanted to build a booking application, with the intention to be the platform that connect the cab vendor with their customer and simplify their booking process, as well as the management of the ride till the payment.',
      'A one man team, which I handle the whole front-to-back end of the app, together with the look and feel, art direction, and the UX of the web site. Built with version 0.9 of Meteor.js'
    ]
  }
]

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'React native',
  'Angular',
  'Vue',
  'Node.js',
  'Next.js',
  'Gatsby',
  'MongoDB',
  'Meteor.js',
  'Web app',
  'Mobile app',
  'Web design'
]

export default () => (
  <div className="has-background-white">
    <section className="hero is-light is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Idraki Muhamad</h1>
          <h2 className="subtitle is-size-4">CV</h2>
          <div className="skills">
            <SkillsRow>
              <div className="tags">
                {skills.map(skill => (
                  <span key={skill} className="tag is-link">
                    {skill}
                  </span>
                ))}
              </div>
            </SkillsRow>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        {jobs.map(job => (
          <JobContainer key={job.date}>
            <DateText>{job.date}</DateText>
            <div className="meta">
              <h5 className="title is-size-5">{job.company}</h5>
              <h6 className="subtitle is-size-6">{job.title}</h6>
            </div>
            <JobDetails className="content">
              {job.descriptions.map(desc => (
                <p key={desc}>{desc}</p>
              ))}
            </JobDetails>
          </JobContainer>
        ))}
        <div className="content">
          <hr className="hr" />
          <h4 className="title is-size-4">Educations</h4>
          <div className="education-list">
            {educations.map(education => (
              <EducationContainer key={education.date}>
                <DateText>{education.date}</DateText>
                <div className="meta">
                  <h5 className="title is-size-5">{education.course}</h5>
                  <h6 className="subtitle is-size-6">{education.uni}</h6>
                </div>
              </EducationContainer>
            ))}
          </div>
        </div>
        <div className="content">
          <hr className="hr" />
          <h4 className="title is-size-4">Projects</h4>
          <div className="education-list">
            {projects.map(project => (
              <ProjectContainer key={project.date}>
                <DateText>{project.date}</DateText>
                <div className="meta">
                  <h5 className="title is-size-5">{project.name}</h5>
                </div>
                <ProjectDetails className="details">
                  {project.descriptions.map(desc => (
                    <p key={desc}>{desc}</p>
                  ))}
                  {project.url && (
                    <Link href={project.url}>
                      <a target="_blank">View project</a>
                    </Link>
                  )}
                </ProjectDetails>
              </ProjectContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
)
