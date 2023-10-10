export function shared(pkg: string) {
  // Don't share this package; each app can load its own version.
  if (pkg === '@acme/ui') return false;
}
