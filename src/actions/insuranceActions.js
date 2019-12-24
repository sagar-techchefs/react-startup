
export const createPolicy = (name, amount) => {
    return {
        type: "CREATE_POLICY",
        payload: { name, amount }
    }
}

export const claimPolicy = (name, claimAmmount) => {
    return {
        type: "CLAIM_POLICY",
        payload: { name, claimAmmount }
    }
}

export const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: { name }
    }
}

