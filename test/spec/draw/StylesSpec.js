var Styles = require('../../../lib/draw/Styles'),
    TestHelper = require('../../TestHelper');


describe('draw/Styles', function() {

  var styles = new Styles();

  describe('#cls', function() {
    
    it('should create style with traits given', function() {
      
      // given
      var expectedStyle = {
        'class': 'foo',
        'fill': 'none'
      };

      // when
      var style = styles.cls('foo', [ 'no-fill' ]);

      // then
      expect(style).toEqual(expectedStyle);
    });


    it('should create style without traits given', function() {

      // given
      var expectedStyle = {
        'class': 'foo',
        'fill': 'none'
      };

      // when
      var style = styles.cls('foo', { fill: 'none' });

      // then
      expect(style).toEqual(expectedStyle);
    });

  });

});