
### At the root project run

```javascript
bst test
```

### Error when command ran:
```
(node:1162) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
TypeError: The "stream" argument must be an instance of Stream. Received an instance of Socket
    at new NodeError (node:internal/errors:377:5)
    at eos (node:internal/streams/end-of-stream:62:11)
    at IncomingMessage._destroy (node:_http_incoming:189:21)
    at _destroy (node:internal/streams/destroy:109:10)
    at IncomingMessage.destroy (node:internal/streams/destroy:71:5)
    at endReadableNT (node:internal/streams/readable:1360:16)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)
```
