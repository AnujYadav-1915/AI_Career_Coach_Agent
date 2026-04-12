const PLACEHOLDER_PATTERN = /placeholder/i;

export function isClerkPublishableKeyConfigured(
  key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
) {
  return Boolean(
    key &&
      !PLACEHOLDER_PATTERN.test(key) &&
      (key.startsWith("pk_test_") || key.startsWith("pk_live_")),
  );
}

export function isClerkSecretKeyConfigured(
  key = process.env.CLERK_SECRET_KEY,
) {
  return Boolean(
    key &&
      !PLACEHOLDER_PATTERN.test(key) &&
      (key.startsWith("sk_test_") || key.startsWith("sk_live_")),
  );
}

export function isClerkConfigured() {
  return (
    isClerkPublishableKeyConfigured() && isClerkSecretKeyConfigured()
  );
}
