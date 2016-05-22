var chai = require('chai');
var rxAssert = require('../index');
chai.use(rxAssert);
var expect = chai.expect;

var Rx = require('rx');
var TestScheduler = Rx.TestScheduler;
var onNext = Rx.ReactiveTest.onNext;
var onError = Rx.ReactiveTest.onError;
var onCompleted = Rx.ReactiveTest.onCompleted;
var subscribe = Rx.ReactiveTest.subscribe;


describe('test rx-assert methods are present', function() {
    it('check isRxEqual function is present', function() {
        var rxEqual = expect(null).to.rxEqual;
        expect(rxEqual).to.be.a('function');
    });

    it('isRxEqual should work when expected is list', function() {
        var actual = [onNext(300, 1), onNext(400, 2)];
        var expected = [onNext(300, 1), onNext(400, 2)];
        expect(actual).rxEqual(expected);
    });

    it('isRxEqual should work when expected is arguments', function() {
        var actual = [onNext(300, 1), onNext(400, 2)];
        expect(actual).rxEqual(onNext(300, 1), onNext(400, 2));
    });
});
