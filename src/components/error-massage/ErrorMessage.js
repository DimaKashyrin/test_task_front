import './ErrorMessage.css';

export default function ErrorMessage() {
  return(
    <div className={'message-box'}>
      <div className={'message-box__element message-box__element_error'}>
        <span>error massage</span>
      </div>
    </div>
  )
}