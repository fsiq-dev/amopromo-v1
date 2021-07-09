/* eslint-disable react/jsx-indent */
import { Container, Title, TitleContainer, CustomButton } from './styled'
import Cards from '../Cards'
import { Droppable } from 'react-beautiful-dnd'
import { FiPlus } from 'react-icons/fi'
import { useState } from 'react'
import CreateCard from '../Button/createCard'
const Lists = ({ data, cards }) => {
  const [isAdd, setOpenAdd] = useState(false)

  const handleOpen = () => {
    setOpenAdd(!isAdd)
  }

  return (
    <Droppable droppableId={String(data.id)}>
      {provided => (
        <Container
          color={data.color}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
        <TitleContainer>
          <Title>{data.title}</Title>
        </TitleContainer>
        <ul>
          {cards.map((item, index) => <Cards key={item.id} data={item} index={index} listId={data.id} />)}
        </ul>
        {!isAdd
          ? <CustomButton onClick={handleOpen}>
            <FiPlus />
            <span>Adicionar outro cartão</span>
            </CustomButton>
          : <CreateCard listColor={data.color} listId={data.id} tagId={data.tagId} close={handleOpen} />}
          {provided.placeholder}
        </Container>
      )}

    </Droppable>
  )
}

export default Lists
