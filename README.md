# js-client-window-resizer

It uses delayed window.resize listener (with setTimeout).
Bind your listeners to the only one delayed-"resize" event instead of copying that code.

__Add your listener (and get an ID key):__
```
var callbackID = windowResizer.queue.add( yourFunc );
```

__Remove your listener by ID key (and get boolean result):__
```
var removedORnot = windowResizer.queue.remove( callbackID );
```
