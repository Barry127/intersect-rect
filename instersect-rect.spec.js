var expect = require('chai').expect;
var intersectRect = require('./intersect-rect');

describe('intersectRect', function () {

  it('is a function', function () {
    expect(intersectRect).to.be.a('function');
  });

  var validRects = [
    [
      { top: 10, left: 10, bottom: 110, right: 110 },
      { top: 60, left: 60, bottom: 160, right: 160 }
    ]
  ];

  var invalidRects = [
    [
      { top: 10, left: 10, bottom: 110, right: 110 },
      { top: 111, left: 111, bottom: 211, right: 211 }
    ]
  ];

  validRects.forEach(function (rects) {
    it(rects[0] + ' intersects ' + rects[1], function () {
      expect(intersectRect(rects[0], rects[1])).to.be.true;
    });
  });

  invalidRects.forEach(function (rects) {
    it(rects[0] + ' does not intersect ' + rects[1], function () {
      expect(intersectRect(rects[0], rects[1])).to.be.false;
    });
  });
});
