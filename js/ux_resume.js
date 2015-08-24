var app = angular.module('app', []);
app.controller('InfoCtrl', [

    function() {
        console.log('controller has loaded!');
        var self = this;

        self.tiles = [{
            title: 'About',
            content: 'I enjoy the technical and social - science, art, psychology, sociology - which enhance my creative skills and art. I love working in teams, making products which communicate their use and their purpose well. Looking for work that is both creative and challenging.',
            picture: 'img/profile.png',
            tag: 'about'
        }, {
            title: 'Skills',
            content: 'JavaScript, AngularJS, Ruby, HTML/CSS, Sinatra, Agile Development, the ability to pick things up as quickly as Spidey catches crooks.',
            picture: 'img/spider-man-60s-cartoon.jpg',
            tag: 'skills'
        }, {
            title: 'Why Dev?',
            content: 'After graduating from college, I found myself with an excellent degree but no hard skills. I found work where I could, leveraging my design instincts and work ethic wherever possible. Then I found Dev Bootcamp. I pursued my own education, gathering hard skills in Web Dev. Now I go on armed with hard skills',
            picture: 'img/dangerous-to-go.jpg',
            tag: 'why-dev'
        }, ];

        self.finalTile = {
            title: 'Resumé',
            content: "Sometimes, people like things on paper. I understand that! You can get a copy of my resumé by clicking on the tile!",
            picture: 'img/resume-card.png',
            tag: 'resume',
            link: 'img/resume-5-19-2015.pdf'
        }

        self.education = [{
            institution: 'Dev Bootcamp',
            major: 'Web Dev Graduate',
            description: '+1000 hour, 19 week immersive coding boot camp, based in San Francisco.',
            timePeriod: 'Aug 2014-Jan 2015',
            picture: 'img/dbc-logo.png'
        }, {
            institution: 'Westmont College',
            major: 'Bachelors of Arts, Communication Studies',
            description: 'Classical Liberal Arts education, with specific focus on graphics, rhetoric, and marketing.',
            timePeriod: 'Aug 2008-May 2012',
            picture: 'img/westmont-college-logo.png'
        }, {
            institution: 'Illustration Academy',
            major: 'Graduate',
            description: '6 week illustration intensive program in classical media and graphics.',
            timePeriod: 'June-July 2010',
            picture: 'img/illustration-academy-logo.png'
        }, ];

        self.experience = [{
            company: 'Dev Bootcamp',
            position: "Teacher's Assistant",
            timePeriod: 'March 2015-May 2015'
        }, {
            company: 'Dev Bootcamp',
            position: 'Web Dev Student',
            timePeriod: 'Aug 2014-Jan 2015'
        }, {
            company: 'PSAV Presentations',
            position: 'Presentation Tech, Core Team member',
            timePeriod: 'April-Aug 2014'
        }, {
            company: 'Cheetah Conservation Fund',
            position: 'Advertising Rep, Graphic Designer (volunteer)',
            timePeriod: 'Sept 2013-Feb 2014'
        }, {
            company: 'Sur La Table',
            position: 'Retail Associate, Team Member',
            timePeriod: 'Nov 2013-Feb 2014'
        }, ];

        self.projects = [{
            name: 'The source!',
            description: "I'm always building, always creating.",
            contribution: "The whole kit and kaboodle.",
            tech: 'JavaScript, Ruby, HTML, CSS, Ruby on Rails, MEAN stack',
            link: 'https://github.com/descartez',
            repoLink: 'https://github.com/descartez',
            picture: 'img/github-icon.png'
        },
        {
            name: 'CycleReady',
            description: "Current project, WIP. Working through Code For America's Civic Hackathon. CycleReady helps hesitant bikers get the hang of urban biking and enables all riders to easily access bike info, swap tips, and advocate for their favorite routes.",
            contribution: 'Front End Design and Functionality',
            tech: 'JavaScript, D3.js, Ruby on Rails, Google Maps API',
            link: 'http://cycleready.herokuapp.com/',
            repoLink: 'https://github.com/cycleready/cycleready-web',
            picture: ''
        },
        {
            name: 'pure.notes.js.ly',
            description: 'A JS/jQuery app which uses local storage to store notes. Made in a day as a challenge, quickly iterating over many approaches until final project was reached.',
            contribution: 'Design, Functionality',
            tech: 'JavaScript, jQuery',
            link: 'http://descartez.github.io/pure-notes-js-ly/',
            repoLink: 'https://github.com/descartez/pure-notes-js-ly',
            picture: 'img/pure-notes-js-ly-screencap.png'
        }]


        self.projects2 = [{
            name: 'refbot',
            description: 'An AngularJS app which takes image URLs and displays them. Designed with artists in mind who need a single place to place their reference photos without the hassle of messing with multiple windows.',
            contribution: 'Front End, Site Design, UX',
            tech: 'HTML, CSS, AngularJS',
            link: 'http://descartez.github.io/refbot/',
            repoLink: 'https://github.com/descartez/refbot',
            picture: 'img/refbot-screencap.png'
        }, {
            name: 'Code Crush',
            description: 'Interactive typing game built in one week as final project for Dev Boot Camp. Created to increase skill and speed in typing symbols and code.',
            contribution: 'Assets, Front End, Site Design, UX',
            tech: 'Phaser.io, JavaScript, MongoDB, Express, AngularJS, Node',
            link: 'http://codecrush.herokuapp.com/#/home',
            repoLink: 'https://github.com/descartez/code-crush',
            picture: 'img/codecrush-screencap.png'
        }, {
            name: 'Invisible Kingdom',
            description: 'Story generator which ties randomly generated content to geolocation coordinates.',
            contribution: 'Content, Functionality, UX',
            tech: 'Sinatra, ActiveRecord, jQuery, AJAX',
            link: 'http://invisiblekingdom.herokuapp.com/',
            repoLink: 'https://github.com/descartez/invisiblekingdom',
            picture: 'img/invisible-kingdom-screencap.png'
        }, ];

    }
]);
