const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

var sortedRobots = robots.map(
  function(robot){
    var copyRobot = {};
    copyRobot['name'] = robot.name
    if (knownDecepticons.includes(robot.name)){copyRobot['alliance'] = 'decepticon'}
    else{copyRobot['alliance'] = 'autobot'}
    return copyRobot
  }
)

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

counter = 0

function MapZebraStripes(){
var coloredZebraStripes = zebraStripes.map(
  function(zebra){
  var newZebra={}
  newZebra.width = zebra.width
  counter ++
  if (counter%2==0){newZebra.color='white'}
  else{newZebra.color='black'}
  return newZebra
  }
)
}
