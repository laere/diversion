import axios from 'axios';

class FetchActionCreators {
  constructor(endpoint, actions) {
    const [REQUEST, SUCCESS, FAILURE] = actions;

    this.actions = {
      REQUEST,
      SUCCESS,
      FAILURE,
    };
    this.endpoint = endpoint;
  }

  fetch() {
    return (dispatch) => {
      dispatch(this.request());

      return axios.get(this.endpoint)
        .then(res => {
          dispatch(this.receive(this.actions.SUCCESS, res.data));
        })
        .catch((res) => {
          dispatch(this.receive(this.actions.FAILURE));
        });
    };
  }

  request() {
    return {
      type: this.actions.REQUEST,
    };
  }

  receive(type, data) {
    return {
      type,
      data,
    };
  }
}

export default FetchActionCreators;
