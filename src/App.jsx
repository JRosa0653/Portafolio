
import restaurant from './assets/restaurant.png';
import lawfirm from './assets/lawfirm.png';
import realestate from './assets/realestate.png';

const projects=[
{title:'Sabor Dominicano',img:restaurant,url:'https://sabor-dominicano.vercel.app/'},
{title:'Law Firm',img:lawfirm,url:'https://law-firm-rho-fawn.vercel.app/'},
{title:'Real Estate',img:realestate,url:'https://real-state-three-ebon.vercel.app/'}
];

export default function App(){
return <div style={{background:'#0f172a',color:'white',minHeight:'100vh'}}>
<section style={{padding:'80px 20px',textAlign:'center'}}>
<h1>Jorge Rosario</h1>
<p>Freelance Web Developer</p>
<p>jrosa0653@gmail.com | +1 849-453-0811</p>
</section>
<section style={{padding:'20px'}}>
<h2>Projects</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'20px'}}>
{projects.map(p=><div key={p.title} style={{background:'#1e293b',padding:'10px',borderRadius:'10px'}}>
<img src={p.img} style={{width:'100%'}}/>
<h3>{p.title}</h3>
<a href={p.url} target='_blank'>Live Demo</a>
</div>)}
</div>
</section></div>
}
