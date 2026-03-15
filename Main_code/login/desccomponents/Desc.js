import DescCSS from "./Desc.css";

export default function Desc() {
  return (
    <div className="description mx-auto" style={DescCSS}>
      Prin crearea unui cont sau conectarea la un cont existent vei putea accesa
      și alte opțiuni restricționate pentru utilizatorii fără cont, care aduc un
      plus studiului pe platforma noastră.
    </div>
  );
}
