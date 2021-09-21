export const START_LOADING = "START_LOADING";
export const FINISH_LOADING = "FINISH_LOADING";

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function finishLoading() {
  return {
    type: FINISH_LOADING,
  };
}
