const Card = (props) => {
  const tampung = (id, gambar, nama, agama, tl) => {
    props.setEdit();
    const datas = {
      id,
      gambar,
      nama,
      agama,
      tl,
    };
    props.set(datas);
  };

  return (
    <div className="card">
      <div className="foto">
        <img src={"https://app-id1.herokuapp.com/" + props.foto} />
      </div>
      <ul>
        <li>Id: {props.id}</li>
        <li>Nama : {props.nama}</li>
        <li>Agama : {props.agama}</li>
        <li>Tanggal Lahir : {props.tl}</li>
      </ul>
      <br />
      <button
        onClick={() =>
          tampung(props.id, props.foto, props.nama, props.agama, props.tl)
        }
      >
        Edit
      </button>
      <br />
      <button onClick={() => props.del(props.id)}>Delete</button>
    </div>
  );
};

export default Card;
