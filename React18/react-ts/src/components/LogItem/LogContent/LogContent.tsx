import styled from '@emotion/styled'
const Content = styled.div(() => ({
  marginLeft: '20px',
  textAlign: 'left'
}))
const ContentTitle = styled.div(() => ({
  fontSize: '14px',
  fontWeight: 'bold'
}))
const ContentText = styled.div(() => ({
  fontSize: '14px'
}))
export default function LogContent(props: {
  title: string,
  content: string
}) {
  const {title = '', content = ''} = props
  return (
    <Content>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{content}</ContentText>
    </Content>
  )
}
