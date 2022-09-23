import { useEffect, useState } from 'react'

import './Main.css'

export default function Main() {
  const [loading, setLoading] = useState(true)
  const [slip, setSlip] = useState(undefined)

  const fetchSlip = async () => {
    setLoading(true)
    const res = await fetch('https://api.adviceslip.com/advice')
    const {slip} = await res.json();
    setSlip(slip);
    setLoading(false);
  }

  useEffect(() => {
    fetchSlip()
  }, []);


  return (
    <main>
        <h2>{!loading && `Advice #${slip.id}`}</h2>
        <p>{loading ? 'Getting Advice...' : `${slip.advice}`}</p>
  
      <svg className="divider" aria-hidden="true" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/>
          <g fill="#CEE3E9">
            <rect width="6" height="16" rx="3"/>
            <rect x="14" width="6" height="16" rx="3"/>
          </g>
        </g>
      </svg>

      <button  disabled={loading && true} aria-label="generate new advice" onClick={() => fetchSlip()}> 
        <svg 
          role="graphics-symbol img" 
          aria-labelledby="title"
          width="24" height="24" 
          xmlns="http://www.w3.org/2000/svg">
          <title id="title" lang="en">Dice Icon</title>
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
          </svg>
      </button>
    </main>
  )
}