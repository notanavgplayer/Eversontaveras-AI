import React from 'react'

interface EmptyProps {
    label: string
}

const Empty = (
    { label }: EmptyProps
) => {
  return (
    <div className="flex justify-center items-center w-full text-2xl text-gray-700 min-h-[32rem]">
      {label}
    </div>
  );
}

export default Empty