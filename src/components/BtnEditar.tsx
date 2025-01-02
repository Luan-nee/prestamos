interface props {
  text: string;
  color: string;
}

function BtnEditar({text, color}: props) {
  return (
    <button className={`btn p-1 ${'bg-'+color+'-500'} text-white rounded-md`}>
      {text}
    </button>
  )
}

export default BtnEditar;