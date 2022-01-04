import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React &amp; Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img className="headerImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg" />
    </div>
  )
}
