import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {ArrowUpRight,Menu,X,Phone,Scale} from 'lucide-react'
import {Button} from '../common/ui.jsx'
import {phone} from '../../data/siteData.js'

export function Navbar(){const [open,setOpen]=useState(false);const links=[['Home','/'],['About','/about'],['Services','/services'],['Contact','/contact']];return <header className="nav"><div className="nav-inner"><Link className="brand" to="/"><span className="brand-mark"><Scale size={19}/></span><span>Motor Vehicle Claim<small>CLAIM SUPPORT</small></span></Link><nav className="desktop-nav">{links.map(([n,p])=><NavLink key={p} to={p}>{n}</NavLink>)}</nav><div className="nav-actions"><a className="nav-phone" href="tel:+447737139740"><Phone size={15}/>{phone}</a><Button to="/#claim">Claim now</Button></div><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-nav">{links.map(([n,p])=><Link key={p} to={p} onClick={()=>setOpen(false)}>{n}<ArrowUpRight size={17}/></Link>)}<a href="tel:+447737139740">Call {phone}</a><Button to="/#claim">Start a claim</Button></nav>}</header>}
