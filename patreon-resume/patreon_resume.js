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
    { institution: 'wat', major: 'more wat', timePeriod: 'eternity'},
    { institution: 'wat', major: 'more wat', timePeriod: 'eternity'},
    { institution: 'wat', major: 'more wat', timePeriod: 'eternity'},
    { institution: 'wat', major: 'more wat', timePeriod: 'eternity'},
  ];

  self.experience = [
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
    { company: '', position: '', timePeriod: '' },
  ];

  self.projects = [
    { name: '', description: '', contribution: '', tech: '', link:''},
    { name: '', description: '', contribution: '', tech: '', link:''},
    { name: '', description: '', contribution: '', tech: '', link:''},
    { name: '', description: '', contribution: '', tech: '', link:''},
  ];

}]);
