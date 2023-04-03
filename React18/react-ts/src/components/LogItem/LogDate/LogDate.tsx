import styled from "@emotion/styled"
const DateBox = styled.div(() => ({
  width: '70px',
  height: '70px',
  borderRadius: '8px',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#333'
}))

const DateHead = styled.div(() => ({
  lineHeight: '24px',
  fontSize: '14px',
  fontWeight: 'bold',
  backgroundColor: '#f40'
}))
const DateTime = styled.div(() => ({
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '46px',
  backgroundColor: '#fff'
}))
export default function LogDate(props: {
  date: string
}) {
  const getDate = () => {
    let month = '3月';
    let day = '4号';
    console.log(new Date(props.date).toLocaleDateString('zh'), '2222');
    return [month, day]
  }
  const [month, day]: string[] = getDate()
  return (
    <DateBox>
      <DateHead>{month}</DateHead>
      <DateTime>{day}</DateTime>
    </DateBox>
  )
}
