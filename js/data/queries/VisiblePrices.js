import {createSelector} from 'reselect';

export default state => {
  const {all} = state.Transactions;
  const transactions = (all.length < 13)
    ? all
    : all.slice(all.length-13)

  return {transactions};
}
