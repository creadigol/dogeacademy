
export interface blockchainStateIF {
    loading: boolean;
    account: string | null;
    TestContract: any | null;
    web3: any | null;
    errorMsg: string | '';
}

const blockchainState : blockchainStateIF = {
    loading: false,
    account: null,
    TestContract: null,
    web3: null,
    errorMsg: "" 
};
  
const blockchainReducer = (state = blockchainState, action:any) => {
    switch(action.type){
        case "CONNECTION_REQUEST":
            return {
                ...blockchainState,
                loading: true,
            };
        case "CONTRACT_SUCCESS":
            return {
                ...state,
                loading: false,
                TestContract: action.payload.TestContract
            };
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                account: action.payload.account,
                web3: action.payload.web3,
            };
        case "CONNECTION_FAILED":
            return {
                ...blockchainState,
                loading: false,
                errorMsg: action.payload,
            };
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                account: action.payload.account,
            };
        default:
            return state;
    }
};

export default blockchainReducer;