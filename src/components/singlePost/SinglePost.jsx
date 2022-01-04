import "./singlePost.css"

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img class="singlePostImage" src="https://m.media-amazon.com/images/I/51XHMQgXkSL._SL1000_.jpg" alt=""/>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span class="singlePostAuthor">Author: <b>Name</b></span>
          <span class="singlePostDate">Date: <b>Jan 1, 2022</b></span>
        </div>
        <p className="singlePostDesc">Voluptate ex quae iudicem ne cillum voluptatibus mentitum malis fabulas. Duis
        quamquam si incurreret, nulla possumus cohaerescant, non noster familiaritatem,
        fore nescius quo quem illum, singulis enim mandaremus do id sed esse velit
        fugiat id do ita graviterque, est o cillum mandaremus. Iudicem malis ullamco
        appellat. Arbitror ne tempor quamquam, nostrud cillum duis excepteur quis, si id
        elit magna cillum, est aliqua tamen id appellat.Eram aliquip ad voluptate. O
        quae velit esse quamquam ea se do illum arbitror, aliquip dolor senserit
        ingeniis, iis senserit ut nescius. Quid ut est culpa fabulas nam tempor
        quibusdam iudicem te litteris quorum si incididunt efflorescere, minim probant
        ne fugiat irure. Arbitror cillum ubi officia adipisicing.</p>
      </div>
    </div>
  )
}
