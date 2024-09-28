export const DEBUG = (
  import.meta.env.APP_ENV !== 'production' && import.meta.env.APP_ENV !== 'perf' && import.meta.env.APP_ENV !== 'test'
);
export const DEBUG_MORE = false;

export const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';

export const GRAMJS_SESSION_ID_KEY = 'GramJs:sessionId';

export const GLOBAL_STATE_CACHE_KEY = 'tt-global-state';