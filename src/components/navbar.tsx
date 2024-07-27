'use client'
import styles from '@/styles/navbar.module.css'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const _styles = `
  min-h-[10vh] lg:min-h-[10vh]
  flex mx-auto sticky top-0 bg-white
  justify-around lg:justify-center items-center space-x-20 relative
`

const hoverStyles = "hover:text-color1 hover:font-semibold hover:underline cursor-pointer "
const stylesMobile = "text-white underline-offset-8 " + hoverStyles
const stylesDesktop = `text-color2 underline-offset-8 ` + hoverStyles

export default function Navbar() {
  const [ toggle, setToggle ] = React.useState(false)
  const router = useRouter()
  const route = usePathname()

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  const handleClick = (href: string) => {
    setToggle(false)
    router.push(href)
  }

  const items = [
    {
      label: 'Steeven T-B',
      href: '#steeven'
    },
    {
      label: "Entropi",
      href: '#entropi'
    },
    {
      label: "Stories",
      href: '#stories'
    },
    {
      label: "Streams",
      href: '#streams'
    },
    {
      label: "Blog",
      href: '#blog'
    },
    {
        label: "Contact",
        href: '#contact'
    }
  ]

  return (
    <div id="steeven" className={_styles}>
      <div className="lg:hidden">
        {/* <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()}></FontAwesomeIcon> */}
        {
          toggle && 
          <div className="flex flex-col items-center bg-color2 absolute w-full left-0 top-[90px] space-y-1">
            {items.map((x) => 
              <p key={x.label} 
              className={stylesMobile + route === x.href ? "text-color1 font-semibold underline" : ""} 
              onClick={() => handleClick(x.href)}>
                { x.label }
              </p>)}
          </div>
        }
      </div>
      <div className="hidden lg:flex space-x-8">
        {items.map((x) => <p key={x.label} className={stylesDesktop + (route === x.href ? "text-color1 font-semibold underline" : "")} onClick={() => handleClick(x.href)}>{ x.label }</p>)}
      </div>
    </div>
  )
}