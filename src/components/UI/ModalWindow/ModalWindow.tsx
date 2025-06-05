import type { ReactNode } from "react"

const ModalWindow = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(90deg, #000 0%, #48000050 41%, #5b000050 54.5%, #000 100%)'
        }} className={`rounded-2xl w-[70%] h-[80%] top-[50%] left-[50%] mt-[25px] inset-0 grid place-items-center fixed z-10 backdrop-blur-lg`}>
            {children}
        </div>
    )
}

export default ModalWindow