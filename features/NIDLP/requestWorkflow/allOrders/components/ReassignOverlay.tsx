
// ReassignOverlay.tsx

import React, { useState } from 'react'
import Image from 'next/image'

interface Employee {
  id: number
  name: string
  email: string
  avatar: string
}

interface ReassignOverlayProps {
  onClose: () => void
  onReassign: (employee: Employee) => void
}

const MOCK_EMPLOYEES: Employee[] = [
  { id: 1, name: 'عبدالله فهد العتيبي',    email: 'aotaibi@nidlp.gov.sa', avatar:"/assets/abdullah.png"  },
  { id: 2, name: 'محمد عبدالله الحربي',    email: 'mharby@nidlp.gov.sa', avatar:"/assets/sarah.png"   },
  { id: 3, name: 'نورة خالد القحطاني',     email: 'nqah@nidlp.gov.sa', avatar:"/assets/ahmed.png"     },
  { id: 4, name: 'منيرة عبدالعزيز القامدي', email: 'mghamdi@nidlp.gov.sa', avatar:"/assets/leila.png"  },
]

function ReassignOverlay({
  onClose, onReassign
}: ReassignOverlayProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const filtered = MOCK_EMPLOYEES.filter(
    (e) => e.name.includes(search) || e.email.includes(search)
  )

  const selectedEmployee = MOCK_EMPLOYEES.find((e) => e.id === selectedId)

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedId(null)
      setSearch('')
      onClose()
    }
  }

  const handleReassign = () => {
    if (!selectedEmployee) return
    onReassign(selectedEmployee)
    setSelectedId(null)
    setSearch('')
    onClose()
  }


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={handleOverlayClick}
      dir="rtl"
    >
      <div className="bg-white rounded-2xl w-[440px] max-w-[95vw] p-7 shadow-2xl">

        {/* Header */}
        <h2 className="text-center text-xl font-bold text-gray-900 mb-1">
          طلب إعادة اسناد
        </h2>
        <p className="text-center text-sm text-gray-400 mb-5">
          يمكنك البحث و إعادة الاسناد من خلال القائمة
        </p>

        {/* Search */}
        <div className="relative mb-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 pr-4 pl-10 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all"
          />
          <span className=" text-gray-400 text-sm">
            🔍
          </span>
        </div>

        {/* Employee List */}
        <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto mb-5">
          {filtered.map((emp) => (
            <div
              key={emp.id}
              onClick={() => setSelectedId(emp.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer
                transition-all border-[1.5px]
                ${selectedId === emp.id
                  ? 'bg-indigo-50 border-indigo-200'
                  : 'border-transparent hover:bg-gray-50'
                }`}
            >
              {/* Radio */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                flex-shrink-0 transition-all
                ${selectedId === emp.id
                  ? 'border-indigo-500 bg-indigo-500'
                  : 'border-gray-300'
                }`}
              >
                {selectedId === emp.id &&
                  <div className="w-2 h-2 rounded-full bg-white" />
                }
              </div>

              {/* Info */}
              <div className="flex-1 text-right">
                <p className="text-sm font-semibold text-gray-800">{emp.name}</p>
                <p className="text-xs text-gray-400 ltr">{emp.email}</p>
              </div>

              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg flex-shrink-0">
                {/* {emp.avatar ?? '👤'} */}
                <Image src ={emp.avatar ?? '👤'} alt='avatar' width={40} height={40}/>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleReassign}
          disabled={!selectedId}
          className="w-full py-3.5 rounded-xl text-sm font-semibold
                     flex items-center justify-center gap-2 transition-all
                     disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500
                     enabled:bg-gradient-to-l enabled:from-indigo-500 enabled:to-indigo-600
                     enabled:text-white enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg"
        >
          ↺ إعادة اسناد موظ
        </button>
      </div>
    </div>
  )
}

export default ReassignOverlay
