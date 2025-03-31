import "./styles.css";
import Header from "./componentes/Header";
import Section from "./componentes/Section";
import ItemLista from "./componentes/ItemLista";
import { ListContato } from "./componentes/ListContato";
import { ListKnowledges } from "./componentes/ListKnowledges";
import { ListLanguages } from "./componentes/ListLanguages";
import { ListPerfil } from "./componentes/ListPerfil";

export default function App() {
  return (
    <div className="App">
      {
        ListPerfil.map((item)=>{return(<Header PerfilImageUrl={item.imageUrl} PerfilImageAlt={item.imageAlt} PerfilTitle={item.title} />)})
      }
      
      <main>
        <Section title="Languages" subtitle="" classe="knowledge-list">
          {
            ListLanguages.map((item)=>{
              return(
                <ItemLista url={item.url} imageUrl={item.imageUrl} imageAlt={item.imageAlt}></ItemLista>
              );
            })
          }
          
        </Section>
        <Section title="Knowledges" subtitle="" classe="knowledge-list">
          {
            ListKnowledges.map((item)=>{
              return(
                <ItemLista url={item.url} imageUrl={item.imageUrl} imageAlt={item.imageAlt}></ItemLista>
              )
            })
          }
        </Section>
        <Section title="Contact Me" subtitle="" classe="contact-list">
          {
            ListContato.map((item)=>{
              return(
                <ItemLista url={item.url} imageUrl={item.imageUrl} imageAlt={item.imageAlt}></ItemLista>
              )
            })
          }
        </Section>
      </main>
    </div>
  );
}
