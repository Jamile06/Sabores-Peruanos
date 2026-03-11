import horarioImg from '../assets/horario.png'

function Horarios() {
  return (
    <div className="schedule-page">
      <main className="schedule-content">
        <div className="text">
          <h1>HORARIOS Y SEDES</h1>
          <p>Atendemos de lunes a sábado de 12:00 pm a 10:00 pm</p>
          <p>Domingos hasta las 5:00 pm</p>
          <p><a href="tel:922521096">San Isidro: 922 521 096</a></p>
          <p><a href="tel:981029866">Miraflores: 981 029 866</a></p>
          <p>Reserva tu mesa en el local que prefieras y vive la experiencia de Sabores Peruanos.</p>
        </div>
        <div className="image">
          <img src={horarioImg} alt="Horarios y sedes" />
        </div>
      </main>
    </div>
  )
}

export default Horarios