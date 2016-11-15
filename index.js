const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render(){
      let granny = React.createElement('p',{}, 'Two grannies having the time of their life!');
      let li = React.createElement('li', {}, 'Agnes');
      let otherLi = React.createElement('li', {}, 'Muriel');
      let ul = React.createElement('ul',{}, [li, otherLi]);
      let passengers = React.createElement('p',{},'Passengers:')
      return  React.createElement('div',{className:'oldercoaster'}, [granny, passengers, ul]);
  }
});


class InFrontOfYou extends React.Component{
  render(){
    let p1 = React.createElement('p', {}, 'You shouldn\'t look too far.')
    let p2child = React.createElement('strong', {}, 'right in front of you.')
    let p2 = React.createElement('p',{}, ['Sometimes, the solution is ', p2child])
    return React.createElement('div', {},[p1,p2])
  }
}

class ButcherShop extends React.Component{
  render(){
    let p = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
      let li1 = React.createElement('li',{},'Tenderloin')
      let li2 = React.createElement('li',{},'Short ribs')
      let li3 = React.createElement('li',{},'Beef shin')
      let li4 = React.createElement('li',{},'Ribeye')
    let ul = React.createElement('ul',{}, [li1,li2,li3,li4])
    return React.createElement('div', {className:'butcher-shop'},[p,ul])
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
