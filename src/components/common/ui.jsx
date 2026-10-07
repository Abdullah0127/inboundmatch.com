import {Link} from 'react-router-dom'
import {motion,useReducedMotion} from 'motion/react'
import {ArrowRight,ArrowUpRight} from 'lucide-react'
import {services} from '../../data/siteData.js'

export function Button({to,children,light=false}){return <Link className={'button '+(light?'button-light':'')} to={to}>{children}<ArrowRight size={16}/></Link>}

export function Reveal({children,className=''}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:reduced?0:.55,ease:[.2,.7,.2,1]}}>{children}</motion.div>}

export function Eyebrow({children,light=false}){return <span className={'eyebrow '+(light?'eyebrow-light':'')}>{children}</span>}

export function Heading({label,title,text}){const reduced=useReducedMotion();return <motion.div className="section-intro" initial={reduced?false:{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:reduced?0:.45,ease:[.2,.7,.2,1]}}><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{text&&<p>{text}</p>}</motion.div>}

const pageHeroVisuals={
  'ABOUT US':{src:'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85',alt:'Legal professionals discussing a case',tag:'PEOPLE IN YOUR CORNER'},
  'OUR SERVICES':{src:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85',alt:'Modern vehicle on the road',tag:'MOTOR VEHICLE & ACCIDENT CLAIMS'},
  'CONTACT':{src:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',alt:'A professional reviewing documents at a desk',tag:'HERE WHEN YOU NEED US'},
  'OUR NETWORK':{src:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',alt:'A team collaborating around a table',tag:'EXPERIENCED LEGAL PARTNERS'},
  'LEGAL INFORMATION':{src:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',alt:'Professional legal advisor in an office',tag:'CLEAR, CONSIDERED INFORMATION'},
  '404':{src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',alt:'A quiet road through an open landscape',tag:'FIND YOUR WAY FORWARD'}
}
export function PageHero({label,title,text}){const reduced=useReducedMotion();const visual=pageHeroVisuals[label]||pageHeroVisuals['OUR SERVICES'];return <motion.section className="page-hero" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.5,ease:[.2,.7,.2,1]}}><div className="wrap page-hero-layout"><div className="page-hero-copy"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p><div className="page-hero-promise"><span><i/> Free eligibility check</span><span><i/> No obligation to enquire</span></div></div><div className="page-hero-visual"><img src={visual.src} alt={visual.alt}/><div className="page-hero-visual-caption"><span>{visual.tag}</span><strong>Guidance, with you at every step.</strong></div></div></div></motion.section>}

export function Field({label,name,type='text',required=false}){return <label className="field">{label}<input name={name} type={type} required={required}/></label>}

export function Select({label,name,options}){return <label className="field">{label}<select name={name} defaultValue=""><option value="" disabled>Select an option</option>{options.map(x=><option key={x}>{x}</option>)}</select></label>}

export function ServiceList({limit}){return <div className="service-grid">{(limit?services.slice(0,limit):services).map(([t,d,Icon],i)=><Link className="service-item" to="/services" key={t}><span className="service-icon"><Icon/></span><span className="service-count">0{i+1}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight className="service-arrow"/></Link>)}</div>}
