import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../../store/board/board.action'

import { Container, Buttons, StyledTextarea, Add, Close } from './styled'

const Create = ({ listColor, listId, tagId, close }) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    color: [listColor],
    tag: `Tag ${tagId}`,
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (form.content === '') {
      return close()
    }
    dispatch(addCard(listId, form))
    close()
  }

  return (
    <>
      <Container>
        <StyledTextarea
          name='content'
          placeholder='Digete um titulo para ativadade...'
          autoFocus
          value={form.content || ''}
          onChange={handleChangeForm}
        />
      </Container>
      <Buttons>
        <Add onClick={handleSubmit}>Add</Add>
        <Close onClick={close} />
      </Buttons>
    </>
  )
}

export default Create
