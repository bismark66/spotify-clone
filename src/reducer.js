/** @format */

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  recents: null,
  topTracks: null,
  newrelease: null,
  // token:
  //   "BQAj7nZQb02DpO7r3ura67e2XcstYnL3pEs-D8hwR3u-vA77OB_HBl97I9bteTiSUsvpwmoDMqNUmEvw6ZL0ujwiyG-wAPjeBwUmWMcSvDkP_FW3kgxPBAfZ7RBA25Wl9c79uHolFt7E88j-rTWqS_iri6KMZeNxU-LUuweFRv7N7ghh9n0U4zM99HpSx0T3_mxXl66-NQHnVbqa0IFv6eg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_RECENTS":
      return {
        ...state,
        recents: action.recents,
      };
    case "SET_TOPTRACKS":
      return {
        ...state,
        topTracks: action.topTracks,
      };
    case "SET_NEWRELEASE":
      return {
        ...state,
        newrelease: action.newrelease,
      };
    default:
      return state;
  }
};
export default reducer;
