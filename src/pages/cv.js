import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useElementScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import SEO from '../components/seo';

const works = [
  {
    date: 'Oct 2019 - Present',
    company: 'Maybank',
    title: 'AVP, Senior Front-end Developer',
    descriptions: [
      "Part of the team involved in the development of Maybank's latest app, MAE by Maybank2u. Lead a group of Front-end and mobile developers, and asserting best structure and implementation as possible, while mentoring new developers and those that aren't familiar with the stack we had. Whenever possible, tried to involved in the art direction and the app interaction and transition, as much as possible.",
      'The app are now available in App Store and the PlayStore.',
    ],
  },
  {
    date: 'Nov 2017 - Oct 2019',
    company: 'RHB Bank Berhad',
    title: 'Front-end Architect',
    descriptions: [
      'Develop the RHB Insurance mobile app. Architect and develop the code base for the internet banking and its design system.',
    ],
  },
  {
    date: 'Nov 2015 - Oct 2017',
    company: 'Syntronic Malaysia',
    title: 'JavaScript Architect',
    descriptions: [
      'Work directly with projects from the ground up, including the planning and requirement gathering, and also the estimation process.',
      'Lead role in most projects (which using JavaScript frameworks) and this include coaching the junior developers',
    ],
  },
  {
    date: 'April 2015 - Oct 2015',
    company: 'Yoozrr Technology',
    title: 'Senior Developer',
    descriptions: [
      'As a startup, we have a small team of three developers, so each of us took a big responsibility in the project. Our project mainly focusing on logistic management system.',
      'The technology stacks includes Node.js (Sails.js), MongoDB, Angular.js, and React Native, At one point we have to scrap some data from the port Klang Westport and Northport website using Nightmare.js (Phantom.js)',
    ],
  },
  {
    date: 'July 2013 - March 2015',
    company: 'PayPal Malaysia',
    title: 'Merchant/Developer Technical Support',
    descriptions: [
      'Handle and troubleshoot merchant’s and developer’s issue in integrating PayPal’s API in their products.',
      'Mentoring juniors in getting started with the flow of the business and API integration training.',
    ],
  },
  {
    date: 'June 2011 - September 2012',
    company: 'BIZY Multimedia',
    title: 'Web Designer',
    descriptions: [
      'Leading a small group of developers. Main project was an Employee Self Service System for TDM Berhad.',
      'In charge directly with the front-end of the application and the UI/UX.',
    ],
  },
  {
    date: 'March 2011 - May 2011',
    company: 'CRN Solutions',
    title: 'Application Consultant',
    descriptions: [
      'Provide training to customers and troubleshoot any issue they’re having with the software the company built.',
    ],
  },
];

const educations = [
  {
    date: '2012 - 2013',
    course: 'Masters of Information Technology (Management)',
    uni: 'UiTM Shah Alam, Malaysia',
  },
  {
    date: '2006 - 2010',
    course: 'Bachelor Degree of Computer Science (Software Engineering)',
    uni: 'University Malaya, Malaysia',
  },
];

const projects = [
  {
    date: 'October 2019 – October 2020',
    name: 'MAE by Maybank2u',
    descriptions: [
      "The next big thing from Maybank, and the future replacement of the current Maybank2u app. Life's about to get even easier. Sort out spending, savings, cravings and more with MAE. It also comes with Maybank2u banking features.",
    ],
    url:
      'https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/mae_by_maybank2u.page',
  },
  {
    date: 'Apr 2018 – Present',
    name: 'Bijak Trivia',
    descriptions: [
      'A reality quiz game for the Malaysian audience. With most of the concept borrowed from the breakthrough reality game, we have launched earlier this year',
    ],
    url: 'http://www.bijaktrivia.com/',
  },
  {
    date: 'Nov 2017 – June 2018',
    name: 'RHB Insurance',
    descriptions: [
      'RHB Insurance mobile app is first of its kind from banks in Malaysia, that provide customers the ability to get free quotation and policy purchases from the comfort of their mobile phone.',

      'Involvement',

      'As Front end developer, I took care of the mobile app development and also some of the back office application that we need to cater for the customer.',

      'We use React Native for the mobile app, and React/Next for the admin site.',
    ],
    url: 'https://www.rhbgroup.com/insurance_app/index.html',
  },
  {
    date: 'Mar 2017 – Oct 2017',
    name: 'Tecforte MSSGARD Redesign',
    descriptions: [
      'I was tasked to help out Tecforte with the redesign and development of their latest product. Bringing my experience as a front end developer and designer, I also involved with coaching and mentoring other team members about Angular and JavaScript, with some of the best known practices in the web app approach, especially the HTML structure and semantic code, and provide some suggestion and insight in regards to the art direction and User experience of the software.',
    ],
    url: 'http://tecforte.com/mssgard/',
  },
  {
    date: 'Oct 2016 – Jan 2017',
    name: 'Capital DK: Atlas',
    descriptions: [
      'As an onsite consultant, my task was to provide the Capital DK team with my experience to help them speed up their development which slightly behind schedule.',

      `They’ve invested in Meteor but without enough resource that actually proficient with it and MongoDB.`,

      `I was assigned to develop some of the core module with Meteor, for both front end and back end side of the application, while working with some MongoDB and UI.`,
    ],
    url: 'https://www.capitaldk.com/solutions/',
  },
  {
    date: '2016',
    name: 'Sprezzatura Coffee',
    descriptions: [
      'Design and develop the website for Sprezzatura Coffee, a cafe and coffee beans supplier. They decided to launch their very own website, and online shop due to high demand from their customer. The site run on top of Shopify eCommerce platform.',
    ],
    url: 'https://sprezzaturacoffee.com/',
  },
  {
    date: 'Apr 2013 – Jan 2014',
    name: 'Cabbr - Black Cab Booking',
    descriptions: [
      'A project for a client who wanted to build a booking application, with the intention to be the platform that connect the cab vendor with their customer and simplify their booking process, as well as the management of the ride till the payment.',
      'A one man team, which I handle the whole front-to-back end of the app, together with the look and feel, art direction, and the UX of the web site. Built with version 0.9 of Meteor.js',
    ],
  },
];

// const skills = [
//   'HTML',
//   'CSS',
//   'Javascript',
//   'Typescript',
//   'React',
//   'React native',
//   'Design system',
//   'Angular',
//   'Vue',
//   'Node.js',
//   'Next.js',
//   'Gatsby',
//   'MongoDB',
//   'Meteor.js',
//   'Web app',
//   'Mobile app',
//   'Web design'
// ]

// const titleAnimateDown = {
//   y: 50,
// };

// const titleAnimateUp = {
//   y: 0,
// };

function CVPage() {
  // const { scrollYProgress } = useViewportScroll();
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const [isComplete, setIsComplete] = useState(false);
  const yRange = useTransform(scrollYProgress, [0, 0.25], [0, -200]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 0.25)), [yRange]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }, []);

  return (
    <>
      <SEO
        keywords={[
          `idraki`,
          `muhamad`,
          `idrakimuhamad`,
          `react`,
          `react-native`,
          `javascript`,
          `html`,
          `css`,
          `cv`,
        ]}
        title="CV"
      />

      <section className="flex flex-col md:flex-row-reverse">
        <div className="hero-bg w-full h-screen flex justify-center items-center md:w-3/12">
          <motion.div
            initial={{
              y: 44,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            style={{
              y: isComplete ? -200 : pathLength,
            }}
            className="flex flex-col justify-center items-start p-6 md:p-12">
            <h1 className="font-sans text-5xl font-bold text-gray-700 text-left tracking-widest uppercase">
              Idraki
              <br />
              Muhamad
            </h1>
            <p className="font-sans text-base text-white">
              Front-End Developer
            </p>
          </motion.div>
        </div>
        <div
          className="content w-full md:w-9/12 h-screen md:overflow-y-scroll"
          ref={ref}>
          <div className="flex flex-col p-6 md:p-12">
            <div className="flex flex-col md:flex-row">
              <div className="work-container flex-1 pr-4">
                <h4 className="font-sans font-bold text-gray-800 tracking-wide uppercase py-4">
                  Work
                </h4>
                <div className="work-list py-6 border-t-4">
                  {works.map((work, i) => (
                    <div
                      key={`${work.date}-${work.company}`}
                      className={`work-item${
                        i < works.length - 1 ? ' mb-4' : ''
                      }`}>
                      <div className="date">
                        <p className="font-sans text-xs text-gray-500 uppercase">
                          {work.date}
                        </p>
                      </div>
                      <div className="company">
                        <p className="font-sans text-lg text-gray-900">
                          {work.company}
                        </p>
                      </div>
                      <div className="position mb-4">
                        <p className="font-sans text-base text-gray-600">
                          {work.title}
                        </p>
                      </div>
                      <div className="descriptions">
                        {work.descriptions.map((desc) => (
                          <p
                            key={desc}
                            className="font-sans text-sm text-gray-600 mb-4">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-container flex-1 pl-4">
                <h4 className="font-sans font-bold text-gray-800 tracking-wide uppercase py-4">
                  Projects
                </h4>
                <div className="education-list py-6 border-t-4">
                  {projects.map((project, i) => (
                    <div
                      key={`${project.date}-${project.name}`}
                      className={`project-item${
                        i < projects.length - 1 ? ' mb-4' : ''
                      }`}>
                      <div className="date">
                        <p className="font-sans text-xs text-gray-500 uppercase">
                          {project.date}
                        </p>
                      </div>
                      <div className="title mb-4">
                        <p className="font-sans text-lg text-gray-900">
                          {project.name}
                        </p>
                      </div>
                      <div className="descriptions mb-4">
                        {project.descriptions.map((desc) => (
                          <p
                            key={desc}
                            className="font-sans text-sm text-gray-600 mb-4">
                            {desc}
                          </p>
                        ))}
                      </div>
                      {project.url && (
                        <div className="url">
                          <p className="font-sans text-base text-blue-600">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer">
                              View project
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="education-container flex-1">
              <h4 className="font-sans font-bold text-gray-800 tracking-wide uppercase py-4">
                Educations
              </h4>
              <div className="education-list py-6 border-t-4">
                {educations.map((study, i) => (
                  <div
                    key={`${study.date}-${study.course}`}
                    className={`study-item${
                      i < educations.length - 1 ? ' mb-4' : ''
                    }`}>
                    <div className="date">
                      <p className="font-sans text-xs text-gray-500 uppercase">
                        {study.date}
                      </p>
                    </div>
                    <div className="company">
                      <p className="font-sans text-lg text-gray-900">
                        {study.course}
                      </p>
                    </div>
                    <div className="position">
                      <p className="font-sans text-base text-gray-600">
                        {study.uni}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CVPage;
