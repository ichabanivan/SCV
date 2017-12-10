import ACTIONS from 'constants/Actions';

/**
 * ActionCreator
 * Actions are payloads of information that send data from your application to your store.
 * @returns {{type: string}}
 */

let initiaText = `Year, Mark, Model, H, Price, Date
1997,Ford,E350,"ac, abs, moon",3000.00, "2012-10-31"
1999,Chevy,"Venture «Extended Edition»","",4900.00, "2012-10-28"
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00, "2012-8-31"
1997,Ford,E350,"ac, abs, moon",3000.00, "2012-10-31"
1999,Chevy,"Venture «Extended Edition»","",4900.00, "2012-10-28"
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00, "2012-8-31"`


export const addTable = (text) => ({
  type: ACTIONS.ADD_TABLE,
  text,
  id: Date.now()
});

export const setFilter = (index = 0, sortTo = false) => ({
  type: ACTIONS.SET_FILTER,
  index,
  sortTo
});
