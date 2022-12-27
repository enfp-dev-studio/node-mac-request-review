# node-mac-request-review
A Native module to show App Store review requesting UI. It tells StoreKit to ask the user to rate or review the app.
This API is wrapping [Storekit:requestReview](https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview)

```bash
$ yarn add node-mac-request-review
```

### Requesting Review

```typescript
import { requestReview } from "node-mac-request-review";

// Ask Review
requestReview();
```

