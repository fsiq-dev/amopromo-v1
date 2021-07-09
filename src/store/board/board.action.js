import TYPES from '../types'

export const addList = (data) => {
  return (dispatch) => {
    const { title } = data
    dispatch({ type: TYPES.ADD_LIST, data: title })
  }
}

export const addCard = (id, data) => {
  return (dispatch) => {
    dispatch({ type: TYPES.ADD_CARD, data: { data, id } })
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggbleId
) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.DRAG_HAPPENED,
      data: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggbleId
      }
    })
  }
}

export const removeCard = (listId, id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_CARD, data: { listId, id } })
  }
}
