const InData = (props) => {
    if(props.title === "Form Tambah") {
        return (
            <form className="app" onSubmit={props.posting}>
                <label>Foto : </label><br/>
                <input type="file" onChange={(e) => props.gambar(e.target.files[0])} required/><br/>
                <label>Nama : </label><br/>
                <input type="text" placeholder="nama..." onInput={(e) => props.nama(e.target.value)} required/><br/>
                <label>Agama : </label><br/>
                <input type="text" placeholder="agama..." onInput={(e) => props.agama(e.target.value)} required/><br/>
                <label>TTL : </label><br/>
                <input type="text" placeholder="tanggal lahir..." onChange={(e) => props.tl(e.target.value)} required/><br/><br />
                <button type="submit">Kirim</button>
            </form>
        )
    }else if(props.title === "Form Update"){
        return (
            <form className="app" onSubmit={props.editUp}>
                <label>Foto : </label><br/>
                <input type="file" onChange={(e) => props.ugambar(e.target.files[0])} required/><br/>
                <label>Nama : </label><br/>
                <input type="text" placeholder="nama..." value={props.vnama} onInput={(e) => props.unama(e.target.value)} required/><br/>
                <label>Agama : </label><br/>
                <input type="text" placeholder="agama..." value={props.vagama} onInput={(e) => props.uagama(e.target.value)} required/><br/>
                <label>TTL : </label><br/>
                <input type="text" placeholder="tanggal lahir..." value={props.vtl} onChange={(e) => props.utl(e.target.value)} required/><br/><br />
                <button type="submit">Kirim</button>
            </form>
        )
    }
}

export default InData;