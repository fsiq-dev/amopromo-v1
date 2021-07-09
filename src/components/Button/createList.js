import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../../store/board/board.action'
import { Container, Buttons, StyledTextarea, Add, Close } from './styled'

const Create = ({ close }) => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    title: ''
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (form.title === '') {
      return close()
    }
    dispatch(addList(form))
    close()
  }

  return (
    <>
      <Container>
        <StyledTextarea
          name='title'
          placeholder='Digete um titulo para ativadade...'
          autoFocus
          value={form.title || ''}
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
