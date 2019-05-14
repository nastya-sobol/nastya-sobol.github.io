$.fn.animateText = function(delay, klass) {
 
  var text = this.text();
  var letters = text.split('');
 
  return this.each(function(){
    var $this = $(this);
    $this.html(text.replace(/./g, '<span class="letter">$&</span>'));
    $this.find('span.letter').each(function(i, el){
      setTimeout(function(){ $(el).addClass(klass); }, delay * i);
    });
  });
 
};

$('#one button').click(function(){
  $(this).next('p').animateText(15, 'opacity');
});

$('#two button').click(function(){
  $(this).next('p').animateText(8, 'background');
});