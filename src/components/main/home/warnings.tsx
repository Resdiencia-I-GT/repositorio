const Warnings = async () => {
    const response = await fetch('https://endpoint.free.mockoapp.net/agenda/teste2')
    const items = await response.json();
  
    return (
      <div className="bg-white rounded" style={{height: "fit-content"}}>
        <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: "rgba(80, 153, 153, 0.2)" }}>
          <h2 className="grade-title" style={{ color: "#000070" }}>Avisos</h2>
        </div>
        {items.map((item: GradeItemProps) => (
          <Item
            title={item.title}
            location={item.location}
            time={item.time}
            key={`${item.location} - ${item.time}`}
          />
        ))}
      </div>
    )
  }
  
  const Item = (props: GradeItemProps) => {
    const { title, location, time } = props;
  
    return (
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex gap-4 py-4 px-3">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2" style={{width: "40px"}}>
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.311 45.311"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656 c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635 C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001 c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0 c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578 c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0 c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29 c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"></path> </g> </g></svg>
          </div>
          <div className="d-flex flex-column justify-content-center gap-1">
            <p className="m-0 fs-5" style={{ color: "#0000fa" }}><strong>{title}</strong></p>
            <p>Descrição do aviso...</p>
            <p className="m-0 text-muted d-inline">{location}<span> - {time}</span></p>
          </div>
        </div>
        <hr className="m-0" />
      </div>
    )
  }
  
  
  export default Warnings;