const LS_TOKEN_KEY = 'metabase.sessionToken';

export function getCachedMetabaseSessionToken() {
  return localStorage.getItem(LS_TOKEN_KEY);
}

export function setCachedMetabaseSessionToken(token) {
  localStorage.setItem(LS_TOKEN_KEY, token);
}
