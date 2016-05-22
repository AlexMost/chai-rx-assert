# chai-rx-assert
Plugin for the chai assert library for comparing observables in tests

# Installation
```bash
npm install chai-rx-assert
```

# Usage
```javascript
var chai = require('chai');
var chaiRx = require('chai-rx-assert');
chai.use(chaiRx);

it('should return messages with delay', () => {
    var scheduler = new TestScheduler();

    var xs = scheduler.createHotObservable(onNext(250, 2), onCompleted(550));

    var results = scheduler.startScheduler(() => {
        return xs.delay(100, scheduler);
    });

    expect(results.messages).to.rxEqual([onNext(350, 2), onCompleted(650)]) // assert ok

    // or without wrapping in list

    expect(results.messages).to.rxEqual(onNext(350, 2), onCompleted(650)) // assert ok
});
```
