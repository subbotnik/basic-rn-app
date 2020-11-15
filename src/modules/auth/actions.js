export const types = {
  SIGN_IN: {
    REQUEST: 'SIGN_IN.REQUEST',
    SUCCESS: 'SIGN_IN.SUCCESS',
    FAILURE: 'SIGN_IN.FAILURE',
  },
};

export function signInRequest(payload) {
  return {
    type: types.GET_DATA.REQUEST,
    payload,
  };
}
