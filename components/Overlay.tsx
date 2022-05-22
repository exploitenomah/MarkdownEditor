

const Overlay = ({show, hideSelf}:{show?: boolean, hideSelf?: React.MouseEventHandler}) => {

  return (
    <div
      onClick={hideSelf}
      className={`fixed z-40 inset-0 w-screen h-screen bg-black transition ${show ? 'visible opacity-40' : 'invisible opacity-0 '}`} ></div>
  )
}

export default Overlay