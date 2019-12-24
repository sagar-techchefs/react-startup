const createPolicy = (name, amount) => {
    return {
        type: "CREAT_POLICY",
        payload: { name, amount }
    }
}

const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: { name }
    }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: "CREAT_CLAIM",
        payload: { name, amountOfMoneyToCollect }
    }
}

// reducers

const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type == "CREATE_CLAIM") {
        return [...oldListOfClaims, action.payload]
    }

    return oldListOfClaims
}

const accounting = (bagOfMoney = 1000, action) => {
    if (action.type === "CREATE_CLAIM") {
        return bagOfMoney - action.payload.amountOfMoneyToCollect
    } else if (action.type === "CREATE_POLICY") {
        return bagOfMoney + action.payload.amount
    }

    return bagOfMoney
}

const policies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === "DELETE_POLICY") {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }

    return listOfPolicies
}
// remove following line and import redux library
const Redux = { createStore, combineReducers }
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({ accounting, claimHistory, policies })

const store = createStore(ourDepartments)

const actionCreatePolicy = createPolicy("User name", 20)
store.dispatch(actionCreatePolicy)

const actionCreateClaim = createClaim("User name", 120)
store.dispatch(actionCreateClaim)

const actionDeletePolicy = deletePolicy("User name", 120)
store.dispatch(actionDeletePolicy)

// get store state 
console.log(store.getState())