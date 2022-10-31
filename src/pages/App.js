import { useState, useEffect } from "react";
import "../assets/css/App.css";
import Card from "../components/Card";
import InData from "../components/InData";

function App() {
  const [datas, setDatas] = useState([]);
  const [title, setTitle] = useState("Form Tambah");
  const [cardEdit, setCardEdit] = useState("All");
  const [content, setContent] = useState({});

  const [editGambar, setEditGambar] = useState(null);
  const [editNama, setEditNama] = useState("");
  const [editAgama, setEditAgama] = useState("");
  const [editTl, setEditTl] = useState("");

  // data
  const [gambar, setGambar] = useState(null);
  const [nama, setNama] = useState("");
  const [agama, setAgama] = useState("");
  const [tl, setTl] = useState("");
  const [parId, setParId] = useState("");
  const [getIds, setGetIds] = useState({});

  useEffect(() => {
    fetch("https://app-id1.herokuapp.com/id/get")
      .then((res) => res.json())
      .then((res) => setDatas(res.data));
  });

  const del = (e) => {
    fetch("https://app-id1.herokuapp.com/id/del/" + e, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
  };

  const posting = (e) => {
    let formDatas = new FormData();
    formDatas.append("gambar", gambar);
    formDatas.append("nama", nama);
    formDatas.append("agama", agama);
    formDatas.append("tanggalLahir", tl);

    e.preventDefault();
    fetch("https://app-id1.herokuapp.com/id/post", {
      method: "POST",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
  };

  const getId = () => {
    console.log(parId);
    fetch("https://app-id1.herokuapp.com/id/get/" + parId)
      .then((res) => res.json())
      .then((res) => setGetIds(res.data));
  };
  const editUp = (e) => {
    let formDatas = new FormData();
    formDatas.append("gambar", editGambar);
    formDatas.append("nama", editNama);
    formDatas.append("agama", editAgama);
    formDatas.append("tanggalLahir", editTl);

    setTitle("Form Update");
    e.preventDefault();
    fetch("https://app-id1.herokuapp.com/id/put/" + content.id, {
      method: "PUT",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
  };

  const setEdit = () => {
    console.log(content);
    setTitle("Form Update");
    setEditGambar(content.gambar);
    setEditNama(content.nama);
    setEditAgama(content.agama);
    setEditTl(content.tl);
  };

  // console.log(datas);
  // console.log(getIds);
  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>{title}</h1>
      <InData
        editUp={editUp}
        title={title}
        set={setTitle}
        posting={posting}
        gambar={setGambar}
        nama={setNama}
        agama={setAgama}
        tl={setTl}
        ugambar={setEditGambar}
        vgambar={editGambar}
        unama={setEditNama}
        vnama={editNama}
        uagama={setEditAgama}
        vagama={editAgama}
        utl={setEditTl}
        vtl={editTl}
      />

      <br />
      <br />
      {/* <Search/> */}
      <div>
        <h1>Serch</h1>
        <input type="text" onChange={(e) => setParId(e.target.value)} />
        <button onClick={getId}>cari!</button>
      </div>
      <br />
      <Card
        foto={getIds.gambar}
        nama={getIds.nama}
        agama={getIds.agama}
        tl={getIds.tanggalLahir}
      />
      <br />
      <br />
      <h1 style={{ marginLeft: "20px" }}>Data Profile</h1>
      <div className="container">
        {datas.map((data, i) => (
          <Card
            setEdit={setEdit}
            key={i}
            foto={data.gambar}
            nama={data.nama}
            agama={data.agama}
            tl={data.tanggalLahir}
            del={del}
            id={data._id}
            set={setContent}
          />
        ))}
      </div>
    </>
  );
}

export default App;
