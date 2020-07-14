import { v4 } from "uuid"
import { useReducer } from "react"

const ADD_MESSAGE = "ADD_MESSAGE"
const REMOVE_MESSAGE = "REMOVE_MESSAGE"

const initialState = []

function addMessage({ content, from }) {
    return {
        id: v4(),
        content,
        from,
        timestamp: new Date().toISOString(),
    }
}

function removeMessage(state, id) {
    const updatedState = [...state]
    const index = updatedState.findIndex((message) => message.id === id)

    updatedState.splice(index, 1)

    return updatedState
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, addMessage(action.payload)]

        case REMOVE_MESSAGE:
            return removeMessage(state, action.payload)

        default:
            throw new Error(`Could not match ${action.type}`)
    }
}

export default function MessageStore() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        addMessage: (payload) => dispatch({ type: ADD_MESSAGE, payload }),
        getAllMessages: () => state,
        removeMessage: (id) => dispatch({ type: REMOVE_MESSAGE, payload: id }),
    }
}
