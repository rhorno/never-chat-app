import { v4 } from "uuid"
import { useReducer } from "react"

const ADD_MESSAGE = "ADD_MESSAGE"

const initialState = []

function addMessage({ content, from }) {
    return {
        id: v4(),
        content,
        from,
        timestamp: new Date().toISOString(),
    }
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, addMessage(action.payload)]

        default:
            throw new Error(`Could not match ${action.type}`)
    }
}

export default function MessageStore() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        addMessage: (payload) => dispatch({ type: ADD_MESSAGE, payload }),
        getAllMessages: () => state,
    }
}
