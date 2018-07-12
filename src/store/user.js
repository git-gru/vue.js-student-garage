export default {

  currentUser: {
    id: '1234341',
	  first_name: 'Evan',
	  last_name: 'Spiegel',
	  email: 'evan@stanford.edu',
	  headline: 'Product Design Student',
	  profile_img_add: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUyNjczMDEzNDkyMzYwNDc1/gettyimages-893177932_evan-spiegel.jpg',
	  interests:{
      //map to true
    },
	  major: 'Computer Science',
	  experiences: [
      {
        title:'Software Engineer Intern',
        company:'Netflix Inc',
        description: 'Managed the database system for the company during the summer and scaled to $100k in revenue',
        start: '2009',
        end: '2009'
      },{
        title:'Founder',
        company:'Snapchat',
        description: 'Managed the database system for the company during the summer and scaled to $100k in revenue',
        start: '2011',
        end: 'Present'
      },{
        title:'Volunteer',
        company:'House of Stanford Cards',
        description: 'Just chilling as a volunteer doing my thing',
        start: '2008',
        end: '2009'
      },
    ],
    stanford_education:{
      school: 'Stanford University',
      description: 'Product Design',
      gradYear: '2010'
    },
    education:[
      {
        school: 'School of Hard Knocks',
        description: 'Dropped Out :)',
        gradYear: 'N/A'
      }
    ],
	  garage_projects: [],
	  free_time: 'Studying Product and hanging out with friends, taking pictures',
    other_cool_things: 'Enjoy Hiking. I really like engaging with teammates on different projects and building cool things',
	  gpa:'3.7',
	  tests:[
      {
        title: 'SAT',
        score: '2230'
      },
      {
        title: 'GMAT',
        score: '710'
      }
    ],
	  locker:[
      {
        title:'HCI Research Paper',
        description:'Published cutting edge research on how humans can interact with computers in the future',
        link:'https://ieeexplore.ieee.org/document/5593511/',
        start:'2010',
        end:'2010'
      },
      {
        title:'PostsMore',
        description:'Developed a marktplace for Stanford students to buy and sell items, ask questions, date, and find housing and rideshare',
        link:'https://postsmore.com',
        start:'2018',
        end:'2018'
      }
    ],
    date_joined: new Date()
  }


}
