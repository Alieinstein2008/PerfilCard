import "./styles.css";
import Header from "./componentes/Header";
import Section from "./componentes/Section";
import ItemLista from "./componentes/ItemLista";

const ListLanguages = [
  {
    url:"https://www.w3schools.com/html/",
    imageUrl:"/assets/html-svgrepo-com.svg",
    imageAlt:"HTML5",
  },
  {
    url:"https://www.w3schools.com/css/",
    imageUrl:"/assets/css-3-svgrepo-com.svg",
    imageAlt:"CSS3",
  },
  {
    url:"https://www.w3schools.com/js/",
    imageUrl:"/assets/javascript-svgrepo-com.svg",
    imageAlt:"JavaScript",
  },
  
  {
    url:"https://www.w3schools.com/php/",
    imageUrl:"/assets/php-svgrepo-com.svg",
    imageAlt:"PHP",
  },
  {
    url:"https://www.w3schools.com/python/",
    imageUrl:"/assets/python-svgrepo-com.svg",
    imageAlt:"Python",
  },
  {
    url:"https://www.w3schools.com/sql/",
    imageUrl:"/assets/sql-file-format-svgrepo-com.svg",
    imageAlt:"SQL",
  },
  
  
]
const ListKnowledges = [
  {
    url:"https://react.dev/",
    imageUrl:"/assets/react-javascript-js-framework-facebook-svgrepo-com.svg",
    imageAlt:"ReactJs",
  },
  {
    url:"/https://nodejs.org/en",
    imageUrl:"/assets/nodejs-svgrepo-com.svg",
    imageAlt:"NodeJs",
  },
  {
    url:"https://git-scm.com/",
    imageUrl:"/assets/git-svgrepo-com.svg",
    imageAlt:"Git"
  },
  {
    url:"https://aws.amazon.com/what-is/restful-api/",
    imageUrl:"/assets/rest-api-svgrepo-com.svg",
    imageAlt:"Rest Api"
  },
  {
    url:"https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html",
    imageUrl:"/assets/aws-ec2-svgrepo-com.svg",
    imageAlt:"AWS-EC2"
  },
  {
    url:"https://sequelize.org/",
    imageUrl:"/assets/sequelize-svgrepo-com.svg",
    imageAlt:"Sequelize"
  },
  
  
];

const ListContato = [
  
  {
    url:"https://github.com/Alieinstein2008",
    imageUrl:"/assets/github-142-svgrepo-com.svg",
    imageAlt:"Github",
  },
  {
    url:"mailto:arthuralonsobussines@gmail.com?subject=Contato",
    imageUrl:"/assets/gmail-svgrepo-com.svg",
    imageAlt:"Gmail",
  },
  {
    url:"https://wa.me/5532991986860?text=Ol%C3%A1%20Alonso%2C%20podemos%20conversar%3F%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
    imageUrl:"/assets/whatsapp-color-svgrepo-com.svg",
    imageAlt:"Whatsapp",
  },
  {
    url:"https://drive.google.com/file/d/16JvuE3BGpAV5kesCEWRLP78QYERef5D3/view?usp=sharing",
    imageUrl:"/assets/drive-svgrepo-com.svg",
    imageAlt:"Curriculo PDF",
  },
 
  {
    url:"https://www.linkedin.com/in/arthur-alonso-marcelino-domingos-51b9bb1a3/",
    imageUrl:"/assets/linkedin-color-svgrepo-com.svg",
    imageAlt:"Linkedin",
  },
  

]

export default function App() {
  return (
    <div className="App">
      <Header />
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
