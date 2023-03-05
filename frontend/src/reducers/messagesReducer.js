/*
  The state is a Map, where they keys are the profileId of the other profile and
  the values are message objects. The Map is sorted by the order of the last
  message, ascending. Messages for a given profileId are sorted by sentAt,
  descending.

  Action types: 
  - SET: creates a new Map from the messages property in the action. Expects
    the messages array to be sorted ascending by sentAt. 
  - ADD: adds a new message, provided in the message property in the action.
*/
const messagesReducer = (state, action) => {
  if (action.type === "SET") {
    if (!action.messages) return state

    const newState = new Map(state)

    action.messages.forEach((message) => {
      const profileId =
        action.profileId !== message.sender.id
          ? message.sender.id
          : message.receiver.id

      if (!profileId) {
        console.dir({ state, newState, profileId, action, message })
      }

      const chat = newState.get(profileId) || []

      newState.delete(profileId) // ensure the key is at the end of the Map
      newState.set(profileId, [message, ...chat])
    })

    return newState
  } else if (action.type === "ADD") {
    if (!action.message) return state

    const profileId =
      action.profileId !== action.message.sender.id
        ? action.message.sender.id
        : action.message.receiver.id

    const newState = new Map(state) // avoid mutating state

    const chat = newState.get(profileId) || []

    newState.delete(profileId) // ensure the key is at the end of the Map
    newState.set(profileId, [action.message, ...chat])

    return newState
  }

  return state
}

export { messagesReducer }
