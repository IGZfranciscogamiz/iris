/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  var iris = window.iris;

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */


  test("Load Config Test", function() {

    iris.settings({
      "environment-default": "pro",
      "environments-nocache": "dev",
      "environment": {
        "localhost": "dev",
        "example.com": "pro"
      },
      "log": {
        "dev": "debug,warning,error",
        "pro": "error"
      }
    });

    strictEqual(iris.env(), "dev", "Should get a dev environment");
    strictEqual(iris.baseUri(), "http://localhost:8080/", "Should get a dev URL");

  });

  test("Global Config Test", function() {
    iris.settings({
      "environment-default": "dev",
      "global" : {"global-test":"value"}
    });
    strictEqual(iris.setting("global-test"), "value", "Should get global config value");

    iris.setting("global-test2", 15);
    strictEqual(iris.setting("global-test2"), 15, "Should get global config value");
  });

  test("Local Config Test", function() {
    iris.settings({
      "environment-default": "dev",
      "local" : {"local-test" : {"dev":"value"} }
    });
    strictEqual(iris.envSetting("local-test"), "value", "Should get local config value");

    iris.envSetting("local-test2", 15);
    strictEqual(iris.envSetting("local-test2"), 15, "Should get local config value");
  });

}(jQuery));