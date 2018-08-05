import './main.html';

Router.route('/', function() {
  window.location.replace('/page1')
});

Router.route('/page1', function() {
  this.render("page1")
})

Router.route('/page2', function() {
  this.render("page2")
});

Router.route('/page3', function(){
  this.render("page3")
});

window.addEventListener('keydown', (e) => {
  if (39 == e.keyCode) {
    var pageNumber = window.location.href.slice(-1);
    var newNumber = parseInt(pageNumber) + 1;
    var nextPage = "/page" + newNumber;
    window.location.replace(nextPage);
  }
  if (37 == e.keyCode) {
    var pageNumber = window.location.href.slice(-1);
    var newNumber = parseInt(pageNumber) - 1;
    var nextPage = "/page" + newNumber;
    window.location.replace(nextPage);
  }
});

