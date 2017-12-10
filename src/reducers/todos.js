import ACTIONS from 'constants/Actions';

export default function CSV(state = '', action) {
  switch (action.type) {
    case ACTIONS.ADD_TABLE:
      let text = action.text;
      let CSV = action.text.split('\n');
      let head = CSV[0].split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);
      let body = CSV.splice(1).map(el => el.split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/));
      console.log(action.text)
      return {
        id: action.id,
        head,
        body,
        completed: false,
        text
      };
    case ACTIONS.SET_FILTER: {
      let index = +action.index;

      const sortTable = state.body.sort(function(first, second){
        console.log(action)
          if (new Date(first[index]) < new Date(second[index])) {
            return action.sortTo ? 1 : -1
          } else if (new Date(first[index]) > new Date(second[index])) {
            return action.sortTo ? -1 : 1
          }

          if(first[index] < second[index]){
            return action.sortTo ? -1 : 1;
          } else if (first[index] > second[index]) {
            return action.sortTo ? 1 : -1
          } else {
            return 0
          }

      });

      return {
        ...state,
        body: sortTable
      }
    }
    default:
      return state;
  }
}
