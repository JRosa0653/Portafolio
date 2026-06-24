
import restaurant from './assets/restaurant.png';
import lawfirm from './assets/lawfirm.png';
import realestate from './assets/realestate.png';
export default function App(){
const projects=[
{t:'Sabor Dominicano',i:restaurant,u:'https://sabor-dominicano.vercel.app/'},
{t:'Law Firm',i:lawfirm,u:'https://law-firm-rho-fawn.vercel.app/'},
{t:'Real Estate',i:realestate,u:'https://real-state-three-ebon.vercel.app/'}
];
return <>
<div className='hero'><h1>Jorge Rosario</h1><p>Freelance Web Developer</p><p>jrosa0653@gmail.com | +1 849-453-0811</p></div>
<div className='grid'>{projects.map(p=><div className='card' key={p.t}><img src={p.i}/><h3>{p.t}</h3><a href={p.u} target='_blank'>Live Demo</a></div>)}</div>
</>
}
