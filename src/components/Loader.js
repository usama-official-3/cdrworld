import React from 'react'

export default function Loader() {
  return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-teal-700 via-teal-800 to-lime-500">
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-white text-5xl font-extrabold tracking-widest uppercase animate-slideup">
      CDR WORLD
    </h1>
  </div>

  <style>
    {`
      @keyframes slideup {
        from { transform: translateY(50%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-slideup {
        animation: slideup 2s ease forwards;
      }
    `}
  </style>
</div>
  )
}
