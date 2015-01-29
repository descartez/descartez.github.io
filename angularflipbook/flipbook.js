var flipApp = angular.module('flipApp', [])
flipApp.controller('flipCtrl', [function(){
  console.log('controller has loaded!');
  var self = this;
  self.panels = ['buildings001.png', 'buildings002.png', 'buildings003.png'];
  var panelIndex = 0;
  self.currentPanel = self.panels[0];


  self.nextPanel = function() {
    console.log(self.panels[panelIndex]);
    if (panelIndex < self.panels.length-1) {
      panelIndex+=1;
      self.currentPanel = self.panels[panelIndex]
    }else if (panelIndex === self.panels.length-1){
      panelIndex=0;
      self.currentPanel = self.panels[panelIndex]
    };
    console.log('panels should change!');
    console.log(self.panels[panelIndex]);
  }
}])
