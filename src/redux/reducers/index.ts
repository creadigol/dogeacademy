import { combineReducers } from 'redux';
import AppReducer, { appStateIF } from './AppReducer';
import blockchainReducer, { blockchainStateIF } from './BlockchainReducer';

export interface ReducerStateIF {
    app: appStateIF;
    blockchain: blockchainStateIF;
}
export default combineReducers({
    app: AppReducer,
    blockchain: blockchainReducer
});
