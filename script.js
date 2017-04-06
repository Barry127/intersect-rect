$(window).load(function () {

  var $a = $('#a');
  var $b = $('#b');
  var $document = $(document);
  var $result = $('#result');
  var z = 1;

  var A = document.getElementById('a');
  var B = document.getElementById('b');

  function overlap () {
    if (intersectRect(A.getBoundingClientRect(), B.getBoundingClientRect())) {
      $result.removeClass('not').addClass('do').text('A & B do intersect');
    } else {
      $result.removeClass('do').addClass('not').text('A & B do not intersect');
    }
  }

  function drag (ev) {
    var $this = $(ev.target);
    var startX = ev.clientX;
    var startY = ev.clientY;
    var startLeft = ev.target.getBoundingClientRect().left;
    var startTop = ev.target.getBoundingClientRect().top;

    $this.css('z-index', z++);

    $document.on('mousemove', function (ev) {
      $this.css({
        left: startLeft + (ev.clientX - startX),
        top: startTop + (ev.clientY - startY) + $document.scrollTop(),
        margin: 0
      });
      overlap();
    });

    $document.on('mouseup', function () {
      $document.off('mousemove');
      $document.off('mouseup');
    });
  }

  $a.on('mousedown', drag);
  $b.on('mousedown', drag);

});
