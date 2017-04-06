(function () {
  function intersectRect (rectA, rectB) {
    return !(
        rectB.left >= rectA.right ||
        rectB.right <= rectA.left ||
        rectB.top >= rectA.bottom ||
        rectB.bottom <= rectA.top
      );
  }

  /* global define, window */
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = intersectRect;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return intersectRect;
    });
  } else {
    window.intersectRect = intersectRect;
  }
})();
