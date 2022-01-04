import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://m.media-amazon.com/images/I/51XHMQgXkSL._SL1000_.jpg" alt=""/>
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none",cursor:"pointer"}}/>
          <input className="writeInput" type="text" placeholder="Title" id ="" autofocus="true"/>
        </div>
        <div className="writeFormGroup">
          <textarea
            name=""
            id=""
            placeholder="Write text"
            className="writeInput writeText"
            type="text"
            rows="10"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
