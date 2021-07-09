/* eslint-disable no-case-declarations */
import TYPES from '../types'

let listID = 4
let cardID = 9

const INITIAL_STATE = [
  {
    id: `list-${1}`,
    tagId: 1,
    title: '📝 To do',
    color: ['#5cc4ff'],
    cards: [
      {
        id: `card-${1}`,
        content: 'Documentar padrões mobile',
        tag: 'Tag 1',
        color: ['#5cc4ff']
      },
      {
        id: `card-${2}`,
        content: 'Ajustes fluxo de compra',
        tag: 'Tag 1',
        color: ['#5cc4ff']
      },
      {
        id: `card-${3}`,
        content: 'Banners da home',
        tag: 'Tag 1',
        color: ['#5cc4ff']
      },
      {
        id: `card-${4}`,
        content: 'Template de e-mail marketing',
        tag: 'Tag 1',
        color: ['#5cc4ff'],
      },
    ]
  },
  {
    id: `list-${2}`,
    tagId: 2,
    title: '💻 In Progress',
    color: ['#945ad1'],
    cards: [
      {
        id: `card-${5}`,
        content: 'Wireframe das telas',
        tag: 'Tag 2',
        color: ['#945ad1']
      },
    ]

  },
  {
    id: `list-${3}`,
    tagId: 3,
    title: '🚀 Done',
    color: ['#59d090'],
    cards: [
      {
        id: `card-${6}`,
        content: 'Implementação do blog',
        tag: 'Tag 3',
        color: ['#59d090']
      },
      {
        id: `card-${7}`,
        content: 'Análise de métricas',
        tag: 'Tag 3',
        color: ['#59d090']
      },
      {
        id: `card-${8}`,
        content: 'UX Review',
        tag: 'Tag 3',
        color: ['#59d090']
      },
    ]
  },
]

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_LIST: {
      const newList = {
        id: `list-${listID}`,
        tagId: listID,
        title: action.data,
        color: ['#f29500'],
        cards: [],
      }
      listID += 1
      return [...state, newList]
    }

    case TYPES.ADD_CARD: {
      const newCard = {
        id: `card-${cardID}`,
        content: action.data.data.content,
        tag: action.data.data.tag,
        color: action.data.data.color,
      }
      cardID += 1
      const newState = state.map(list => {
        if (list.id === action.data.id) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState
    }

    case TYPES.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggbleId
      } = action.data
      const newState = [...state]
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id)
        const card = listStart.cards.splice(droppableIndexStart, 1)

        const listEnd = state.find(list => droppableIdEnd === list.id)
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }
      return newState
    }

    case TYPES.REMOVE_CARD:
      const newState = [...state]
      const list = state.find(list => action.data.listId === list.id)
      const card = list.cards.splice(action.data.id, 1)
      return newState

    default:
      return state
  }
}

export default reducer
