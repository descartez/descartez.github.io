var app = angular.module('app', []);
app.controller('InfoCtrl',[function(){
  console.log('controller has loaded!');
  var self = this;

  self.tiles = [
  { title: 'About', content: 'I enjoy the technical and social - science, art, psychology, sociology - which enhance my creative skills and art. I love working in teams, making products which communicate their use and their purpose well. Looking for work that is both creative and challenging.', picture: 'img/profile.png', tag: 'about'},
  { title: 'Skills', content: 'JavaScript, AngularJS, Ruby, HTML/CSS, Sinatra, the ability to pick things up as quickly as Spidey catches crooks.', picture: 'img/spider-man-60s-cartoon.jpg', tag: 'skills'},
  { title: 'Why Dev?', content: 'After graduating from college, I found myself with an excellent degree but no hard skills. I found work where I could, leveraging my design instincts and work ethic wherever possible. Then I found Dev Bootcamp. I pursued my own education, gathering hard skills in Web Dev. Now I go on, but not unarmed.', picture: 'img/dangerous-to-go.jpg', tag: 'why-dev'},
  ];

  self.finalTile = { title: 'Resumé', content: "Sometimes, people like things on paper. I understand that! You can get a copy of my resumé here!", picture: 'img/resume-card.png', tag: 'resume', link: 'img/resume-ux.pdf'}

  self.education = [
  { institution: 'Dev Bootcamp', major: 'Web Dev Graduate', description: '+1000 hour, 19 week immersive coding boot camp, based in San Francisco.', timePeriod: 'Aug 2014-Jan 2015'},
  { institution: 'Westmont College', major: 'Bachelors of Arts, Communication Studies', description: 'Classical Liberal Arts education, with specific focus on graphics, rhetoric, and marketing.', timePeriod: 'Aug 2008-May 2012'},
  { institution: 'Illustration Academy', major: 'Graduate', description: '3 week illustration intensive program in classical media and graphics.', timePeriod: 'July 2010'},
  ];

  self.experience = [
  { company: 'Dev Bootcamp', position: "Teacher's Assistant", timePeriod: 'March 2015-current' },
  { company: 'Dev Bootcamp', position: 'Web Dev Student', timePeriod: 'Aug 2014-Jan 2015' },
  { company: 'PSAV Presentations', position: 'Presentation Tech, Core Team member', timePeriod: 'April-Aug 2014' },
  { company: 'Cheetah Conservation Fund', position: 'Advertising Rep, Graphic Designer (volunteer)', timePeriod: 'Feb 2014' },
  { company: 'Sur La Table', position: 'Retail Associate, Team Member', timePeriod: 'Nov 2013-Feb 2014' },
  ];

  self.projects = [
  { name: 'refbot', description: 'Current project, not currently launched. An Angular app which takes image URLs and displays them. Designed with artists in mind who need a single place to place their reference photos without the hassle of messing with multiple windows.', contribution: 'Front End, Site Design, UX', tech: 'HTML, CSS, AngularJS', link:'', repoLink: 'https://github.com/descartez/refbot'},
  { name: 'Code Crush', description: 'Interactive typing game built in one week as final project for Dev Boot Camp. Created to increase skill and speed in typing symbols and code.', contribution: 'Assets, Front End, Site Design, UX', tech: 'Phaser.io, JavaScript, MongoDB, Express, AngularJS, Node', link:'http://codecrush.herokuapp.com/#/home', repoLink: 'https://github.com/descartez/code-crush'},
  { name: 'Invisible Kingdom', description: 'Story generator which ties randomly generated content to geolocation coordinates.', contribution: 'Content, Functionality, UX', tech: 'Sinatra, ActiveRecord, jQuery, AJAX', link:'http://invisiblekingdom.herokuapp.com/', repoLink: 'https://github.com/descartez/invisiblekingdom'},
  ];

}]);
