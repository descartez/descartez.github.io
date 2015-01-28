var flipApp = angular.module('flipApp', [])
flipApp.controller('flipCtrl', [function(){
  console.log('controller has loaded!');
  var self = this;
  self.panels = ['panel 1', 'panel 2', 'panel 3'];
  self.currentPanel = self.panels[0];
  self.nextPanel = function() {
    self.currentPanel = self.panels[1];
    console.log('panels should change!')
  }
}])
