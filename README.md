# node-mac-request-review
A Native module to show App Store review requesting  UI. It tells StoreKit to ask the user to rate or review the app
[Wrapped function](https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview)is deprecated.

```bash
$ yarn add node-mac-request-review
```

### Requesting Review

```typescript
import { requestReview } from "node-mac-request-review";

// Ask Review
requestReview();
```

