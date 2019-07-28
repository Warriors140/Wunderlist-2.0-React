import {
    LOADING,
    SUCCESS,
    REQUIRED,
    INVALIDCREDENTIALS,
    LOGINFAILED,
    REQUIRED,
    USERCANNOTBEFOUND
  } from "../actions";
  
  
  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };

      case SUCCESS:
        return {
          ...state,
          loading: true,
          errormessage: null
        };

        case REQUIRED:
          return {
              ...state,
              loading: false,
              errormessage: action.payload
          };

          case INVALIDCREDENTIALS:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            };

        case LOGINFAILED:
          return {
              ...state,
              loading: false,
              errormessage: action.payload
          };
          
        case REQUIRED:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            };
            
        case USERCANNOTBEFOUND:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            };
                
      default:
        return state;
    }
  }