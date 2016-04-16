var assert = require('assert');
import MyComponent from '../src/client/app/MyComponent';

describe('MyComponent', () => {
  var myComponent = new MyComponent();
  describe('State', () => {
    it ('should start with no likes', () => {
      assert(myComponent.state.likesCount === 0);
    });
  });
});