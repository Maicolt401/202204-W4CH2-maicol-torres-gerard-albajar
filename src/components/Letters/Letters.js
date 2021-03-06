import "./Letters.css";

const Letters = ({ action }) => {
  return (
    <ul className="letters">
      <li className="letter" onClick={action}>
        <a href="a">A</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="b">B</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="c">C</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="d">D</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="e">E</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="f">F</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="g">G</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="h">H</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="i">I</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="j">J</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="k">K</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="l">L</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="m">M</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="n">N</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="ñ">Ñ</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="o">O</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="p">P</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="q">Q</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="r">R</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="s">S</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="t">T</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="u">U</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="v">V</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="w">W</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="x">X</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="y">Y</a>
      </li>
      <li className="letter" onClick={action}>
        <a href="z">Z</a>
      </li>
    </ul>
  );
};

export default Letters;
