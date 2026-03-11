import fondoImg from '../assets/fondo.png'

function Inicio() {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundImage: `url(${fondoImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: '3rem',
            color: 'white',
            background: 'rgba(85,0,0,0.85)',
            padding: '1rem 2.5rem',
            borderRadius: '50px'
          }}>SABORES PERUANOS</h1>
          <div style={{marginTop: '2rem'}}>
            <a href="/horarios" className="btn">RESERVAS</a>
            <a href="/carta" className="btn">CARTA</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio