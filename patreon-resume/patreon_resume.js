var app = angular.module('app', []);
app.controller('InfoCtrl',[function(){
  console.log('controller has loaded!');
  var self = this;

  self.tiles = [
    { title: 'About', content: 'I enjoy the technical and social - science, art, psychology, sociology - which enhance my creative skills and art. I love working in teams, making products which communicate their use and their purpose well. Looking for work that is both creative and challenging.', picture: '../img/profile.png', link:'', tag: 'about'},
    { title: 'Skills', content: 'JavaScript, AngularJS, Ruby, HTML/CSS, Sinatra, the ability to pick things up as quickly as Spidey catches crooks.', picture: 'img/spider-man-60s-cartoon.jpg', link:'', tag: 'skills' },
    { title: 'Why Dev?', content: 'After graduating from college, I found myself with an excellent degree but no hard skills. I found work where I could, leveraging my design instincts and work ethic wherever possible. Then I found Dev Bootcamp. I pursued my own education, gathering hard skills in Web Dev. Now I go on, but not unarmed.', picture: 'img/dangerous-to-go.jpg', link:'', tag: 'why-dev' },
    // { title: 'Resumé', content: 'Some people like paper things. I get that. Here\'s a paper with my info on it!', picture: '', link:'' },
  ];

  self.education = [
    { institution: 'Dev Bootcamp', major: 'Web Dev Graduate', description: '+1000 hour, 19 week immersive coding boot camp, based in San Francisco.', timePeriod: 'Aug 2014-Jan 2015'},
    { institution: 'Westmont College', major: 'Bachelors of Arts, Communication Studies', description: 'Classical Liberal Arts education, with specific focus on graphics, rhetoric, and marketing.', timePeriod: 'Aug 2008-May 2012'},
    { institution: 'Illustration Academy', major: '3 week illustration intensive program in classical media and graphics.', description: 'Graduate', timePeriod: 'July 2010'},
  ];

  self.experience = [
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
  ];

  self.projects = [
    { name: 'Code Crush', description: 'Interactive typing game built in one week as final project for Dev Boot Camp. Created to increase skill and speed in typing symbols and code.', contribution: 'Assets, Front End, Site Design, UX', tech: 'Phaser.io, JavaScript, MongoDB, Express, AngularJS, Node', link:'http://codecrush.herokuapp.com/#/home', shortLink: 'codecrush.herokuapp.com'},
    { name: 'Invisible Kingdom', description: 'Story generator which ties randomly generated content to geolocation coordinates.', contribution: 'Content, Functionality, UX', tech: 'Sinatra, ActiveRecord, jQuery, AJAX', link:'http://invisiblekingdom.herokuapp.com/', shortLink: 'invisiblekingdom.herokuapp.com'},
    { name: '', description: '', contribution: '', tech: '', link:'', shortLink: ''},
    { name: '', description: '', contribution: '', tech: '', link:'', shortLink: ''},
  ];

}]);
