import {useState} from 'react'
import {CircleHelp,FileText,Mail,Phone,X} from 'lucide-react'
import {email,phone} from '../../data/siteData.js'

export function QuickContact(){
  const [open,setOpen]=useState(false)
  return <aside className="quick-contact">
    {open&&<div className="quick-contact-panel" role="dialog" aria-label="Quick contact options">
      <a className="quick-contact-row" href="tel:+447737139740"><span className="quick-contact-icon"><Phone/></span><strong>Call us</strong><span className="quick-contact-value">{phone}</span></a>
      <a className="quick-contact-row" href={'mailto:'+email}><span className="quick-contact-icon"><Mail/></span><strong>Email us</strong><span className="quick-contact-value">{email}</span></a>
      <a className="quick-contact-row" href="/#claim"><span className="quick-contact-icon"><FileText/></span><strong>Claim form</strong><span className="quick-contact-value">Go to claim form</span></a>
    </div>}
    <button className="quick-contact-toggle" type="button" aria-label={open?'Close quick contact':'Open quick contact'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<CircleHelp/>}</button>
  </aside>
}
