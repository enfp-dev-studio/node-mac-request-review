#import <Storekit/Storekit.h>
#include <napi.h>

void RequestReview(const Napi::CallbackInfo &info) {
  // Napi::Env env = info.Env();
  if (@available(macOS 10.14, *)) {
    [SKStoreReviewController requestReview];
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "requestReview"),
              Napi::Function::New(env, RequestReview));
  return exports;
}

// NODE_API_MODULE(request_review, InitAll)
NODE_API_MODULE(request_review, Init)